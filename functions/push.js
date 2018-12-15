const {
  google
} = require('googleapis')
const request = require('request')
const argv = require('minimist')(process.argv.slice(2))
const key = require('./key.json')

let jwtClient = new google.auth.JWT(
  key.client_email, null, key.private_key,
  ['https://www.googleapis.com/auth/actions.fulfillment.conversation'],
  null
)

jwtClient.authorize((_, tokens) => {
  // code to retrieve target userId and intent
  let notif = { userNotification: { title: '<NOTIFICATION_TITLE>' },
    target: { userId: argv.id,
      intent: 'Daily content', // Expects a IETF BCP-47 language code (i.e. en-US)
      locale: 'en-US' } }

  request.post('https://actions.googleapis.com/v2/conversations:send', {
    'auth': {
      'bearer': tokens.access_token
    },
    'json': true,
    'body': {
      'customPushMessage': notif
    }
  }, (_, httpResponse, body) => {
    console.log(httpResponse.statusCode + ': ' + httpResponse.statusMessage)
    console.log(body)
  })
})
