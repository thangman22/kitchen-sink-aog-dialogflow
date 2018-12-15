const {
  UpdatePermission
} = require('actions-on-google')

exports.setupNotification = (conv) => {
  conv.ask(new UpdatePermission({
    intent: 'Daily content'
  }))
}
