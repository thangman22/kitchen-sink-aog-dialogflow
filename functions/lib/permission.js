const {
  Permission,
  DateTime,
  SignIn,
  Place
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

exports.askForPlacePermission = (conv) => {
  const options = {
    context: 'To find a place to pick you up',
    prompt: 'Where would you like to be picked up?'
  }
  conv.ask(new Place(options))
}

exports.askForSignIn = (conv) => {
  conv.ask('Do you want to sign In?')
  conv.ask(new SignIn())
}
