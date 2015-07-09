import json
import csv
import datetime
from operator import itemgetter
import copy


'''
Symptoms
    1 Febre
|  2 | Tosse
|  5 | Dor de Garganta
|  6 | Falta de ar
|  7 | Nausea e vomitos
|  8 | Diarreia
|  9 | Dor nas articulacoes
| 10 | Dor de cabeca
| 11 | Sangramento
| 12 | Manchas vermelhas no corpo
| 13 | Teve contato ou conhece alguem com algum desses sintomas nos ultimos 7 dias?
| 14 | Voce procurou o servico de saude?
'''

#symptoms = {1:"fever", 2:"cough", 3:"sore throat", 6:"lack of air", 7:"vomiting", 8:"diarrhea", 9:"joint pain", 10:"headache",
#            11:"bleeding", 12:"skin rash", 13:"had contact with symptoms?", 14:"searched the health service?"}
symptom_names = ["fever", "cough", "sore throat", "lack of air", "vomiting", "diarrhea", "joint pain", "headache",
            "bleeding", "skin rash", "had contact with symptoms?", "searched the health service?"]

KEY_USER = 0
KEY_SYMPTOM = 1
KEY_DATE = 2
KEY_STATE = 3

# return a user/symptom for each symptom the user is reporting
def make_event_from_row(csv_row):
    user = dict()
    symptoms = []
    col_num = 0
    for csv_col in csv_row:
        col_num = col_num + 1
        if col_num == 1:
            user['record_id'] = csv_col
        if col_num == 2:
            user['user_id'] = csv_col
        if col_num == 3:
            event_date_time = csv_col.split(" ")
            user['report_date'] = event_date_time[0]
            user['onset_date'] = event_date_time[0]
        if col_num == 6:
            user['longitude'] = csv_col
        if col_num == 7:
            user['latitude'] = csv_col
        if col_num == 8:
            user['city'] = csv_col
        if col_num == 9:
            user['region'] = csv_col
        if col_num == 27:
            user['age'] = csv_col
        if col_num == 28:
            user['sex'] = 'male ' if csv_col == 'masculino' else 'female'
        #collect symptoms
        if col_num >= 12 and col_num <= 21: #ignore contact with symptoms and contacted health services
            if csv_col == '1':
                sympton_name = symptom_names[col_num - 12]
                symptoms.append(sympton_name)

    return (user, symptoms)

def process_user_symptom(user_event, symptom, state, users_out):
    #if user_event['user_id'] != '241' and user_event['user_id'] != '223':
    #    return
    key = (user_event['user_id'], symptom, user_event['onset_date'], state)
    # only take the first event for this day
    # TODO except if its an I feel fine
    if not key in users_out:
        users_out[key] = user_event

def process_raw_data(in_file, out_file):
    users_input = dict()
    user_events = dict()
    csv_row_count = 0
    with open(in_file, 'rb') as csvfile:
        csv_rows = csv.reader(csvfile)
        for csv_row in csv_rows:
            csv_row_count += 1
            (user_report, symptoms) = make_event_from_row(csv_row)
            if user_report['record_id'] == '19240':
                print 'here;'
            if len(symptoms) == 0:
                for symptom in symptom_names: # signal 'I feel fine'
                    process_user_symptom(user_report, symptom, 0, user_events)
            else:
                for symptom in symptoms:
                    process_user_symptom(user_report, symptom, 1, user_events)

    print "input CSV rows:", csv_row_count
    print "user events:", len(user_events)

    # sort the events by user, symptom and date into case states
    event_keys = sorted(user_events.keys(), key=itemgetter(KEY_USER, KEY_SYMPTOM, KEY_DATE, KEY_STATE))

    # print "---------------sorted -------------"
    cases_states = []
    cases_json = []

    case_count = 0
    last_key = None

    for curr_key in event_keys:
        curr_event = copy.deepcopy(user_events[curr_key])
        curr_event['symptom'] = curr_key[1]
        # print "key", curr_key, curr_event['record_id']
        if curr_key[KEY_STATE] == 0:
            last_key = None # always save next case after a report of 'I'm ok'
            continue

        curr_user = curr_event['user_id']
        curr_symptom = curr_event['symptom']
        curr_date = curr_event['onset_date']

        if last_key is None:
            save_case = True
        else:
            save_case = True if curr_user != last_key[KEY_USER] or curr_symptom != last_key[KEY_SYMPTOM] else False
            if not save_case:
                curr_datetime = datetime.datetime.strptime(curr_date, '%Y-%m-%d').date()
                last_datetime = datetime.datetime.strptime(last_key[KEY_DATE], '%Y-%m-%d').date()
                delta = curr_datetime - last_datetime
                save_case = delta.days >= 7

        if save_case:
            cases_json.append(curr_event)
            last_key = curr_key
            case_count = case_count + 1

    # print "---------------cases -------------"
    # for case in cases_json:
    #    print case['user_id'], case['symptom'], case['onset_date']
    out = open(out_file, 'wb')
    out.write(json.dumps(cases_json))
    out.close
    print 'case count:', case_count

process_raw_data('fifa_reports1.csv', 'cases_symptoms_fifa.json')

