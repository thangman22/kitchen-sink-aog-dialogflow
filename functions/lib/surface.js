exports.surfaceChecking = (conv) => {
  const hasScreen =
        conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT') ? 'Has a screen and' : ''
  const hasAudio =
        conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT') ? 'Has a Audio and' : ''
  const hasMediaPlayback =
        conv.surface.capabilities.has('actions.capability.MEDIA_RESPONSE_AUDIO') ? 'Has a Media Playback and' : ''
  const hasWebBrowser =
        conv.surface.capabilities.has('actions.capability.WEB_BROWSER') ? 'Has a Web Browser' : ''

  conv.ask(hasScreen + ' ' + hasAudio + ' ' + hasMediaPlayback + ' ' + hasWebBrowser)
}
