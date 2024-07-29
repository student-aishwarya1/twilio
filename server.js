const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')
app.use(express.static(publicPath));
app.listen(3000);




var sid = "ACd98af9f1483486ceaabb53a16a92b36d";
var auth_token = "1f7d6449f49e88b39329bf814e50997f";

var twilio = require("twilio")(sid, auth_token);

twilio.messages
  .create({
    from: "+17637037908",
    to: "+919098061952",
    body: "this is a testing message",
  })
  .then(function(res) {console.log("message has sent!")})
  .catch(function(err)  {
    console.log(err);
  });