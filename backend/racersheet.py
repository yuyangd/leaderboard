import gspread
import json
from oauth2client.service_account import ServiceAccountCredentials

class RacerSheet(object):
  """
  This version of the Google Sheets API has a limit of 500 requests per 100 seconds per project, and 100 requests per 100 seconds per user. Limits for reads and writes are tracked separately. There is no daily usage limit.
  https://developers.google.com/sheets/api/limits
  """
  def __init__(self):
    self.scope = ['https://spreadsheets.google.com/feeds',
            'https://www.googleapis.com/auth/drive']

    self.credentials = ServiceAccountCredentials.from_json_keyfile_name(
        'leaderboard-41f364525977.json', self.scope)

    self.gc = gspread.authorize(self.credentials)

    self.wks = self.gc.open("leaderboard").sheet1

  def get_color(self, position):
      return {
          1: "bg-gold",
          2: "bg-silver",
          3: "bg-copper",
      }.get(position, "")

  def sort_sheet(self):
    self.wks.sort((2, 'asc'))

  def fetch_sheet(self):
    list_of_lists = self.wks.get_all_values()

    data = [{
        "position": i+1,
        "name": racer,
        "time": time,
        "color": self.get_color(i+1)
    } for i, (racer, time) in enumerate(list_of_lists)]

    return json.dumps(data)