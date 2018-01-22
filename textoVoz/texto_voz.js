'use strict';

const TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
const fs = require('fs');

const textToSpeech = new TextToSpeechV1(
  {
    // if left unspecified here, the SDK will fall back to the TEXT_TO_SPEECH_USERNAME and TEXT_TO_SPEECH_PASSWORD
    // environment properties, and then Bluemix's VCAP_SERVICES environment property
    username: 'f1351b57-e4a4-4813-ac40-0108fe81100f',
    password: 'qz0TbDKyVkjd'
  }
);

// Synthesize speech and then pipe the results to a file
textToSpeech
  .synthesize({
    text: 'Bem-Vindo, você está no chat do Banézi Clube+, como posso te ajudar?',
    //voice: 'en-US_LisaVoice', // Optional voice
    voice: 'pt-BR_IsabelaVoice', // Optional voice

    accept: 'audio/mp3' // default is audio/ogg; codec=opus
  })
  .pipe(fs.createWriteStream('audio.mp3'));