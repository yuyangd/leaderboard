# Leaderboard

## Setup Google Spreedsheet

The spreedsheet looks like this:

|A|B|
|:--|:--|
|Woom|10.23|
|speedi|12.34|
|Ach|13.34|
|Tomi|18.36|

## Download the client config from Google API console

Keep the `credentials.json` under ./backend

## To run the stack locally

```bash
docker-compose up
```

visit http://localhost:3000

## Run frontend and backend separately

### Run the frontend seperately

```bash
yarn install
REACT_APP_API_URL=http://localhost:5000 yarn start
```

### Start the backend

```bash
virtualenv venv -p python3
source venv/bin/activate
pip install -r requirements.txt

python main.py
```