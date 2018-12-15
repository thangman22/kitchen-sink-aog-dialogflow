const {
  RegisterUpdate
} = require('actions-on-google')

exports.setupRoutine = (conv) => {
  conv.ask(new RegisterUpdate({
    intent: 'Daily content',
    frequency: 'ROUTINES'
  }))
}

exports.finish = (conv, _, registered) => {
  if (registered && registered.status === 'OK') {
    conv.close(`Ok, I'm now part of your routine!`)
  } else {
    conv.close(`Ok, I'm not part of your routine.`)
  }
}
