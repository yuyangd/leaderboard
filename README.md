# Leaderboard

## Run the frontend

```bash
yarn install
yarn start
```

## Run the backend to interact with Google Spreedsheet

The spreedsheet looks like this:

|A|B|
|:--|:--|
|Woom|10.23|
|speedi|12.34|
|Ach|13.34|
|Tomi|18.36|

### Download the client config from Google API console

Keep the `credentials.json` in this directory

### Start the backend

```bash
virtualenv venv -p python3
source venv/bin/activate
pip install -r requirements.txt

python quickstart.py
```