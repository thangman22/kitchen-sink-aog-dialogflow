const {
  RegisterUpdate
} = require('actions-on-google')

exports.setupDailyUpdate = (conv) => {
  conv.ask(new RegisterUpdate({
    intent: 'Daily content',
    frequency: 'DAILY'
  }))
}

exports.finish = (conv, _, registered) => {
  if (registered && registered.status === 'OK') {
    conv.close(`Ok, I'll start giving you daily updates.`)
  } else {
    conv.close(`Ok, I won't give you daily updates.`)
  }
}
