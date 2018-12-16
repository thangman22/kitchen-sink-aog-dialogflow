
exports.confirmPermission = (conv, _, confirmationGranted) => {
  let confirm = confirmationGranted ? 'Granted' : 'Denied'
  // ID for notification
  console.log(conv.user.id)
  conv.ask('User was ' + confirm)
}

exports.confirmDatePermission = (conv, params, confirmationGranted) => {
  // Date and time is here
  console.log(confirmationGranted)
  if (confirmationGranted) {
    conv.close('Alright, date set.')
  } else {
    conv.close(`I'm having a hard time finding an appointment`)
  }
}

exports.confirmPlacePermission = (conv, params, place, status) => {
  if (!place) return conv.ask(`Sorry, I couldn't get a location from you`)
  // the place also carries formattedAddress, and coordinates fields
  const {
    name
  } = place
  if (place.name) conv.ask(`Alright! I'll send the car to ${name}`)
}

exports.confirmSignIn = (conv, _, signin) => {
  if (signin.status !== 'OK') {
    conv.ask('You need to sign in before using the app.')
    return
  }
  // User information after sign in
  console.log(conv.user)

  conv.ask('Great! Thanks for signing in.')
}

exports.noInput = (conv) => {
  const repromptCount = parseInt(conv.arguments.get('REPROMPT_COUNT'))
  if (repromptCount === 0) {
    conv.ask(`What was that?`)
  } else if (repromptCount === 1) {
    conv.ask(`Sorry I didn't catch that. Could you repeat yourself?`)
  } else if (conv.arguments.get('IS_FINAL_REPROMPT')) {
    conv.close(`Okay let's try this again later.`)
  }
}
