import json
import csv
import datetime
from operator import itemgetter
import copy
import uuid


'''
Output format:

{
  "user_id": "USER-0",
  "date_onset": "2015-06-07",
  "date_reported": "2015-06-08T10:00:00Z",
  "coords_reported": [
    -44.166579547126275,
    -23.196792124315248
  ],
  "lat_reported": -23.196792124315248,
  "lng_reported": -44.166579547126275,
  "syndrome": "Diarreica",
  "age": 26,
  "gender": "Female",
  "sought_assistance": true,
  "nearby_symptoms": true,
  "role": 'Athlete',
  "needs_help": true,
  "foreigner": true
}
'''

'''
Input fields:

1   id
2   usuario_id
3   data_cadastro
4   jogo_ok
5   pontuacao
6   latitude
7   longitude
8   cidade_id
9   cidade_regiao_metro
10  atualizado
11  ativo
12  campo1
13  campo2
14  campo3
15  campo4
16  campo5
17  campo6
18  campo7
19  campo8
20  campo9
21  campo10
22  campo11
23  campo12
24  sentimento
25  needs_help
26  foreigner
27  nearby_symptoms
28  role
29  sought_help
30  region_id
31  gender
32  age
33  fake_lat
34  fake_lng
'''


# {
#     "city": "Caruaru",
#     "user_id": "172",
#     "region": "",
#     "longitude": "-8.2877372",
#     "sex": "male ",
#     "record_id": "1822",
#     "report_date": "2014-05-23",
#     "date_onset": "2014-05-23",
#     "latitude": "-35.9635275",
#     "age": "29",
#     "symptom": "diarrhea"
#   },


#symptoms = {1:"fever", 2:"cough", 3:"sore throat", 6:"lack of air", 7:"vomiting", 8:"diarrhea", 9:"joint pain", 10:"headache",
#            11:"bleeding", 12:"skin rash", 13:"had contact with symptoms?", 14:"searched the health service?"}
symptom_names = ["Fever",
                "Cough",
                "Sore throat",
                "Shortness of breath",
                "Nuasea and Vommitting",
                "Diarrhea",
                "Joint-pain",
                "Headache",
                "Bleeding",
                "Rash",
                "Dark urine",
                "Red eyes"]

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
            user['date_reported'] = event_date_time[0]
            user['date_onset'] = event_date_time[0]
        if col_num == 33:
            user['lng_reported'] = csv_col
        if col_num == 34:
            user['lat_reported'] = csv_col
        if col_num == 8:
            user['city'] = csv_col
        if col_num == 30:
            user['region'] = csv_col
        if col_num == 32:
            user['age'] = csv_col
        if col_num == 31:
            user['gender'] = 'male' if csv_col == 'masculino' else 'female'
        #collect symptoms
        if col_num >= 12 and col_num <= 23:
            if csv_col == '1':
                sympton_name = symptom_names[col_num - 12]
                symptoms.append(sympton_name)
        #new fields
        if col_num == 25:
            user['needs_help'] = csv_col
        if col_num == 26:
            user['foreigner'] = csv_col
        if col_num == 27:
            user['nearby_symptoms'] = csv_col
        if col_num == 28:
            user['role'] = csv_col
        if col_num == 29:
            user['sought_help'] = csv_col

    return (user, symptoms)

def process_user_symptom(user_event, symptom, state, users_out):
    #if user_event['user_id'] != '241' and user_event['user_id'] != '223':
    #    return
    user_id = user_event['user_id'] if user_event['user_id'] else uuid.uuid4()
    key = (user_id, symptom, user_event['date_onset'], state)
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
        curr_date = curr_event['date_onset']

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
    #    print case['user_id'], case['symptom'], case['date_onset']
    out = open(out_file, 'wb')
    out.write(json.dumps(cases_json))
    out.close
    print 'case count:', case_count

process_raw_data('fifa_reports1.csv', 'cases_symptoms_fifa.json')

