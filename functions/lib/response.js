const {
  SimpleResponse,
  BasicCard,
  Button,
  Image,
  BrowseCarousel,
  BrowseCarouselItem
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
      url: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
      alt: 'Image alternate text'
    }),
    display: 'CROPPED'
  }))
}

exports.browseCarousel = (conv) => {
  const a11yText = 'Google Assistant Bubbles'
  const googleUrl = 'https://google.com'
  if (!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')) {
    conv.ask('Sorry, try this on a screen device or select the ' +
    'phone surface in the simulator.')
    return
  }
  // Create a browse carousel
  conv.ask('This is BrowseCarousel')
  conv.ask(new BrowseCarousel({
    items: [
      new BrowseCarouselItem({
        title: 'Title of item 1',
        url: googleUrl,
        description: 'Description of item 1',
        image: new Image({
          url: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
          alt: a11yText
        }),
        footer: 'Item 1 footer'
      }),
      new BrowseCarouselItem({
        title: 'Title of item 2',
        url: googleUrl,
        description: 'Description of item 2',
        image: new Image({
          url: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
          alt: a11yText
        }),
        footer: 'Item 2 footer'
      })
    ]
  }))
}
