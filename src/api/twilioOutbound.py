import os
from twilio.rest import Client

account_sid = "AC6bcf34e6b74efe5ebddbada54e48d0a6"
auth_token = "7f6a567428c1f3c13547d3bf10802c62"

client=Client(account_sid, auth_token)

client.message.create(
    to="4079954145", 
    from="+19703358326",
    body="Hello there!")