import React, { Component } from "react"
import { getWordleFromBackend, getWordByDate } from "../api/wordle"

const { Provider, Consumer } = React.createContext()

class SpotifyUserControlsProvider extends Component {
  state = {
    wordle: String,
    day: String,
    month: String,
    year: String,
  }

  componentDidMount() {
    this.getWordleValue()
  }

  getWordleValue = async () => {
    // get value if user can edit from db and set it to the state
    // setInterval(async () => {
    const whatsTheWordleAnswerAPICall = await getWordByDate()

    console.log(whatsTheWordleAnswerAPICall)
    var dateObj = new Date()
    var month = dateObj.getMonth() + 1 //months from 1-12
    var day = dateObj.getDate()
    var year = dateObj.getFullYear()

    // const userData = usersCanEdit.data[0]

    this.setState({
      wordle: whatsTheWordleAnswerAPICall,
      day,
      month,
      year,
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
          day: this.state.day,
          month: this.state.month,
          year: this.state.year,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { SpotifyUserControlsProvider, Consumer as SpotifyUserControlsConsumer }
