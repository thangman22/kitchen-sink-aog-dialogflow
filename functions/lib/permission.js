const {
  Permission,
  DateTime,
  SignIn
} = require('actions-on-google')

exports.askForPermission = (conv) => {
  const options = {
    context: 'To address you by name and know your location',
    // Ask for more than one permission. User can authorize all or none.
    permissions: ['NAME', 'DEVICE_PRECISE_LOCATION']
  }
  conv.ask(new Permission(options))
}

exports.askForDatePermission = (conv) => {
  const options = {
    prompts: {
      initial: 'When would you like to schedule the appoinment?',
      date: 'What day was that?',
      time: 'What time?'
    }
  }
  conv.ask(new DateTime(options))
}

exports.askForSignIn = (conv) => {
  conv.ask('Do you want to sign In?')
  conv.ask(new SignIn())
}
