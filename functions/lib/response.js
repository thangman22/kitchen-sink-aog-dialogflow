const {
  SimpleResponse,
  BasicCard,
  Button,
  Image
} = require('actions-on-google')

exports.simpleResponse = (conv) => {
  conv.ask(new SimpleResponse({
    speech: 'Howdy, this is GeekNum. I can tell you fun facts about almost any number, my favorite is 42. What number do you have in mind?',
    text: 'Howdy! I can tell you fun facts about almost any number. What do you have in mind?'
  }))
}

exports.basicCard = (conv) => {
  conv.ask('This is basic card response')
  conv.ask(new BasicCard({
    text: `This is a basic card.  Text in a basic card can include "quotes" and
  most other unicode characters including emoji 📱.  Basic cards also support
  some markdown formatting like *emphasis* or _italics_, **strong** or
  __bold__, and ***bold itallic*** or ___strong emphasis___ as well as other
  things like line  \nbreaks`, // Note the two spaces before '\n' required for
    // a line break to be rendered in the card.
    subtitle: 'This is a subtitle',
    title: 'Title: this is a title',
    buttons: new Button({
      title: 'This is a button',
      url: 'https://assistant.google.com/'
    }),
    image: new Image({
      url: 'https://example.com/image.png',
      alt: 'Image alternate text'
    }),
    display: 'CROPPED'
  }))
}
