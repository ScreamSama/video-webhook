"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.echoText
      ? req.body.result.parameters.echoText
      : "Seems like some problem. Speak again.";
  return res.json({
    speech: speech,
    displayText: speech,
    source: "video-webhook"
  });
});

restService.post("/audio", function(req, res) {
  var speech = "";
  switch (req.body.result.parameters.AudioSample.toLowerCase()) {
    //Speech Synthesis Markup Language 
    case "music one":
      speech =
        '<speak><audio src="https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg">did not get your audio file</audio></speak>';
      
  }
  return res.json({
    speech: speech,
    displayText: speech,
    source: "video-webhook"
  });
});

restService.post("/video", function(req, res) {


switch (req.body.result.parameters.video.toLowerCase()) {
    //Speech Synthesis Markup Language 
    case "chatbot":
      speech ='Playing Chatbot Demo..';      
  }
  return res.json({
    speech: speech,
    mediaType: 'MEDIA_TYPE_UNSPECIFIED',
    mediaObjects: [
                {
                    name: 'chatbot',
                    description: 'Demo Video for Chatbots',
                    contentUrl: 'https://www.youtube.com/watch?v=CIufvXWKw0k',
                    largeImage: {
                      url= 'https://cdn.unwire.pro/wp-content/uploads/2016/07/Facebook-Chatbot.jpg'
                    },
                    icon: {
                      url= 'https://cdn.unwire.pro/wp-content/uploads/2016/07/Facebook-Chatbot.jpg'
                    }
                }
              ]
       }
    source: "video-webhook"
  });
});



restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
