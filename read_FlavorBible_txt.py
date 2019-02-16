import firebase_admin
from firebase_admin import credentials, db
import json

cred = credentials.Certificate('the-flavor-bible-firebase-adminsdk-d7t1s-97ca028987.json')
firebase_admin.initialize_app(cred, {
    'databaseURL' : 'https://the-flavor-bible.firebaseio.com/'
})


root = db.reference()

# chosen_flavor = list(root.child('T').child('1').get("TAHINI"))
# print(chosen_flavor)

# Grab specific Flavor
# print ('bok choy' in 'BOK CHOY (aka CHINESE CABBAGE or PAK CHOI')

alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

def list_all_flavors():
    total_flavors = 0
    flavors_dict = {}
    for letter in alphabet:
        flavors = root.child(letter).get()

        if flavors is not None:
            total_flavors += len(root.child(letter).get())
            for i,flavor in enumerate(flavors):
                if flavor is not None and flavor['name']:
                    # print(flavor['name'])
                    flavors_dict[flavor['name']] = flavor

    print("Total amount of Flavors", total_flavors)
    print(flavors_dict.keys())

    # Next were are used for creating a JSON file
    # try:
    #     with open('veg_flavorbible.JSON', 'w') as file:
    #         file.write(json.dumps(flavors_dict, indent=4))
    # except Exception as e:
    #     print(e)

def find_matching_flavor(chosen_Flav):
    total_matches = 0
    chosen_flavor = list(root.child(chosen_Flav[0]).get(chosen_Flav))

    print(chosen_flavor)

    for letter in alphabet:
        flavors = root.child(letter).get()

        if flavors is not None:

            for i,flavor in enumerate(flavors):

                if flavor is not None and flavor['name']:
                    for ingredient in chosen_flavor[0]['Ingredients']:
                        # print('chosen:',ingredient)

                        if flavor['name'] != chosen_Flav and (ingredient.upper() in flavor['name'] or ingredient in flavor['name']):
                            # print(flavor['name'] ,":::" ,ingredient.upper()  )
                            total_matches +=1
                            # print(flavor.get("name", "no name"))
                            pass
                        else:
                            pass
                            # print("\n=====NONE======\n" )
                            # print(flavor['name'])

    print("Total amount of Matches", total_matches)

def read_Json_flavors():
    try:
        with open('veg_flavorbible.JSON') as f:
            print('in try')
            flavs = json.load(f)
    except Exception as e:
        print("Error!!", e)

    print(json.dumps(flavs, indent=4))
    print(flavs.keys())

if __name__ == '__main__':
    read_Json_flavors()

    #find_matching_flavor("ACAI")

    #list_all_flavors()

