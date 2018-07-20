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
  var speech="";

  return res.json({
    speech:
      '<speak>  <audio src="http://techslides.com/demos/sample-videos/small.mp4">did not get your MP3 audio file</audio></speak>',
    displayText:
      '<speak>  <audio src="http://techslides.com/demos/sample-videos/small.mp4">did not get your MP3 audio file</audio></speak>',
    source: "video-webhook"
  });
});



restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
