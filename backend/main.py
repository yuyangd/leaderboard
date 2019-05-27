import flask
from racersheet import RacerSheet
from cachetools import cached, TTLCache

app = flask.Flask(__name__)
cache = TTLCache(maxsize=100, ttl=60)

@cached(cache)
def read_cache():
  rs = RacerSheet()
  rs.sort_sheet()
  resp = flask.Response(rs.fetch_sheet())
  return resp

@app.route('/')
def racer_data():
  resp = read_cache()
  resp.headers['Access-Control-Allow-Origin'] = '*'
  resp.headers['Access-Control-Request-Method'] = '*'
  return resp

@app.route('/sort')
def sort_data():
  rs = RacerSheet()
  rs.sort_sheet()
  return "sorted"

app.run(host='0.0.0.0')