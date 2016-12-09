import csv
import json

class DOB:
    def __init__(self):
        pass

    def run(self):
        with open("dob_violations_2016.csv") as fh:
            fieldnames = fh.readline()
            reader = csv.DictReader(fh, fieldnames)
            for row in reader:
                json.dump(row, jsonfile)
                jsonfile.write('\n')

