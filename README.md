# Kitchen Sink for Action On Google with Dialogflow

I want to start this project because I did a lot of Action on google session I'm alway need to open the document and setup new code, That why I started this. This project is contain all method and implementation for making assistant via Dialogflow, Action on Google, Firebase firestore

### Requirement
* Node.js 8+
* [Firebase CLI](https://github.com/firebase/firebase-tools)
* [ngrok](https://ngrok.com/)
* [Dialogflow account](https://dialogflow.com/)


### How to use
* Setup Dialogflow account create intent and import intent ZIP file. 
* [Create Firebase Project](https://firebase.google.com/)
* Setup Firebase project in local then add Cloud function to project.
* rename config.sample.json to config.json and replace client_id by follow [this guide](https://developers.google.com/actions/identity/google-sign-in) 
* Serve Cloud Function for firebase in local with command `yarn serve`.
* start ngrok with command `ngrok http 5000`.
* Setup "Fullfillment" in Dialogflow.
* Try all feature with simmulator.

### How to Setup update / Routine

### How to setup Notification