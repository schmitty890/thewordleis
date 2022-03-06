import React, { Component } from "react"
import { getWordleFromBackend } from "../api/wordle"

const { Provider, Consumer } = React.createContext()

class SpotifyUserControlsProvider extends Component {
  state = {
    wordle: String,
  }

  componentDidMount() {
    this.getWordleValue()
  }

  getWordleValue = async () => {
    // get value if user can edit from db and set it to the state
    // setInterval(async () => {
    const whatsTheWordleAnswerAPICall = await getWordleFromBackend()

    console.log(whatsTheWordleAnswerAPICall)

    // const userData = usersCanEdit.data[0]

    this.setState({
      wordle: whatsTheWordleAnswerAPICall,
    })
    // }, 1000)
    // setInterval(async () => {
    //   console.log("CURRENT STATE")
    //   console.log(this.state)
    // }, 1000)
  }

  render() {
    return (
      <Provider
        value={{
          wordle: this.state.wordle,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { SpotifyUserControlsProvider, Consumer as SpotifyUserControlsConsumer }
