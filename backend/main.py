import flask
from racersheet import RacerSheet

app = flask.Flask(__name__)

@app.route('/')
def racer_data():
  rs = RacerSheet()
  rs.sort_sheet()
  resp = flask.Response(rs.fetch_sheet())
  resp.headers['Access-Control-Allow-Origin'] = '*'
  resp.headers['Access-Control-Request-Method'] = '*'
  return resp

app.run(host='0.0.0.0')