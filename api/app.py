from flask import Flask, request, jsonify, make_response
from flask_restful import Resource, Api
import json
import csv

app = Flask(__name__)
api = Api(app)

<<<<<<< HEAD
#dob_violations_2016.csv
#combined_data since 2013.csv
with open("resources/data/november_combined.csv") as fh:
=======
with open("resources/data/boiler_inspect_25k.csv") as fh:
>>>>>>> ebed7694e08a1b66e704621f429b2edca5a312f5
    fieldnames = fh.readline().strip().split(",")
    reader = csv.DictReader(fh, fieldnames)
    dlines = []
    for row in reader:
        dlines.append(row)


badges = {}
for line in dlines:
    if line["inspect_name"] not in badges:
        badges[line["inspect_name"]] = [line]
    else:
        badges[line["inspect_name"]].append(line)




class Main(Resource):
    @staticmethod
    def get():
        try:
            startlinenumber = int(request.args["s"])
            endlinenumber = int(request.args["e"])
        except Exception as e:
            print(e)
            startlinenumber = 1
            endlinenumber = 2

        #data = request.get_json(force=True)

        try:
            lineData = dlines[startlinenumber:endlinenumber]
        except Exception as e:
            response = {
                    'result': repr(e),
                    'error_code': 500,
                    'nlines': len(dlines)
                }
        else:
            response = {
                    'result': lineData,
                    'error_code': 0,
                    'nlines': len(dlines)
                }
        finally:
            #r =  jsonify(response)
            r = make_response(json.dumps(response), 200)
            r.headers['Access-Control-Allow-Origin'] = "localhost:8081"
            r.headers['Access-Control-Allow-Methods'] = 'GET, PUT, POST, OPTIONS'
            r.headers['Access-Control-Allow-Headers'] = "Cache-Control, Pragma, Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            r.headers["Content-type"] = "application/json; charset=utf-8"
            r.headers["Access-Control-Allow-Credentials"] = 'true'
            r.headers["Accept"] = "*/*"
            return r
            #r.headers.extend({'Access-Control-Allow-Origin', '*'})


<<<<<<< HEAD
api.add_resource(Main, '/combined')
=======
class Badges(Resource):
    @staticmethod
    def get():
        try:
            badgenumber = request.args["badge"]
        except Exception as e:
            print(e)
            badgenumber = badges[list(badges.keys())[0]]

        try:
            badgeData = badges[badgenumber]
        except Exception as e:
            response = {
                    'result': repr(e),
                    'error_code': 500,
                    'nlines': len(badgeData)
                }
        else:
            response = {
                    'result': badgeData,
                    'error_code': 0,
                    'nlines': 0
                }
        finally:
            #r =  jsonify(response)
            r = make_response(json.dumps(response), 200)
            r.headers['Access-Control-Allow-Origin'] = "*"
            r.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
            r.headers['Access-Control-Allow-Headers'] = "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            r.headers["Content-type"] = "application/json; charset=utf-8"
            r.headers["Access-Control-Allow-Credentials"] = 'true'
            r.headers["Accept"] = "*/*"
            return r

api.add_resource(Main, '/')
api.add_resource(Badges, '/badges')
>>>>>>> ebed7694e08a1b66e704621f429b2edca5a312f5

if __name__ == '__main__':
    app.run()


# http://localhost:5000/?s=1&e=5