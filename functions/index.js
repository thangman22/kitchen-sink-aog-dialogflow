// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict'
require('firebase-admin')
const functions = require('firebase-functions')
const response = require('./lib/response')
const surface = require('./lib/surface')
const permission = require('./lib/permission')
const event = require('./lib/event')
const dailyUpdate = require('./lib/dailyUpdate')
const routineUpdate = require('./lib/routineUpdate')
const notification = require('./lib/notification')
const config = require('./config.json')

const {
  dialogflow,
  Suggestions
} = require('actions-on-google')

const app = dialogflow({
  clientId: config.clientId
})

app.intent('Default Welcome Intent', welcome)
app.intent('Simple Response', response.simpleResponse)
app.intent('Basic Card', response.basicCard)
app.intent('Surface checking', surface.surfaceChecking)
app.intent('Ask for Permission', permission.askForPermission)
app.intent('Ask for Date', permission.askForDatePermission)
app.intent('Ask for Place', permission.askForPlacePermission)
app.intent('Ask for Sign in', permission.askForSignIn)
app.intent('Ask for confirmation', permission.askForConfirmation)
app.intent('This is cancel', cancel)
app.intent('Conversation with params', conversataionWithParams)
app.intent('Conversation with params - yes', conversataionWithParamsYes)
app.intent('Setup Daily update', dailyUpdate.setupDailyUpdate)
app.intent('Setup Routine', routineUpdate.setupRoutine)
app.intent('Setup Notification', notification.setupNotification)

// intent for listen event
app.intent('ask_for_permission_confirmation', event.confirmPermission)
app.intent('ask_for_datetime_confirmation', event.confirmDatePermission)
app.intent('ask_for_place_confirmation', event.confirmPlacePermission)
app.intent('ask_for_sign_in_confirmation', event.confirmSignIn)
app.intent('ask_for_confirmation_confirmation', event.confirm)

app.intent('actions_intent_NO_INPUT', event.noInput)
app.intent('Finish Update Routine Setup', dailyUpdate.finish)

function conversataionWithParams (conv, params) {
  console.log(params)
  conv.ask(`Do you confirm to order ${params['number-integer']} ${params['menu']}?`)
}

function conversataionWithParamsYes (conv, params) {
  console.log(params)
  conv.ask(`I will process to order now`)
}

function welcome (conv) {
  conv.ask('This is kitchen sink for Action on Google with Dialogflow')
  conv.ask(new Suggestions(['Simple Response', 'Basic Card', 'Surface checking', 'Ask for Permission', 'Ask for Date', 'Ask for Place', 'Ask for Sign in', 'Ask for confirmation', 'Can I get 1 ice tea', 'Daily content']))

  // Save to user storage
  conv.user.storage.count = 1
  // Save to conversation storage
  conv.data.count = 1
}

function cancel (conv) {
  conv.ask('This is cancel')
}

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app)
