from datetime import datetime
from pytz import timezone
import pytz

utc = pytz.utc
print utc.zone

eastern = timezone('US/Eastern')
print eastern.zone

rome = timezone('Europe/Rome')

loc_dt = rome.localize(datetime(2002, 10, 27, 6, 0, 0))
loc_dt2 = rome.localize(datetime(2002, 8, 27, 6, 0, 0))

rome_date = datetime(2002, 10, 27, 6, 0, 0, tzinfo=rome)

print(loc_dt.isoformat())
print(loc_dt2.isoformat())

print(rome_date.isoformat())