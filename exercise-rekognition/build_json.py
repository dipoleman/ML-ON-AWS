import glob
import boto3
import json
from pprint import pprint

client = boto3.client('rekognition')
combined = []
i = 1
for filename in glob.glob('exercise-rekognition/public/photos/*.jpeg'):

    with open(filename, 'rb') as fd:
        response = client.detect_labels(Image={'Bytes': fd.read()})
        # pprint(response)
        entry = {"Filename": filename.replace(
            "exercise-rekognition/public/", "")}
        entry["Labels"] = response["Labels"]
        combined.append(entry)


print(json.dumps(combined, indent=2))
