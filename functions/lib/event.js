
exports.confirmPermission = (conv, _, confirmationGranted) => {
  let confirm = confirmationGranted ? 'Granted' : 'Denied'
  conv.ask(conv.user.name.display + ' was ' + confirm)
}

exports.confirmDatePermission = (conv, _, confirmationGranted) => {
  if (confirmationGranted) {
    conv.ask('Alright, date set.')
  } else {
    conv.ask(`I'm having a hard time finding an appointment`)
  }
}

exports.confirmSignIn = (conv, _, signin) => {
  if (signin.status !== 'OK') {
    conv.ask('You need to sign in before using the app.')
    return
  }

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
