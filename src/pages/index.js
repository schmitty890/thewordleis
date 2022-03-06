import React from "react"

import {
  SpotifyUserControlsProvider,
  SpotifyUserControlsConsumer,
} from "../context/wordleContext"

export default function Home() {
  return (
    <SpotifyUserControlsProvider>
      <SpotifyUserControlsConsumer>
        {({ wordle }) => <div>todays wordle answer: {wordle}</div>}
      </SpotifyUserControlsConsumer>
    </SpotifyUserControlsProvider>
  )
}
