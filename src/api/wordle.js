import axios from "axios"

export const getWordleFromBackend = async () => {
  console.log("getUserCanEditBoolean")
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8080"
        : "https://thewordleis-api.herokuapp.com"

    // console.log(baseURL)
    // post data to a url endpoint
    const response = await axios.get(`${baseURL}/api/v1/updateDBTimeZones`)
    console.log(response.data)

    const usersTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    let wordleAnswer = ""

    for (var i = 0; i < response.data.length; i++) {
      console.log(usersTimeZone)
      console.log(response.data[i].timeZone)
      console.log(response.data[i].timeZone === usersTimeZone)
      if (response.data[i].timeZone === usersTimeZone) {
        wordleAnswer = response.data[i].word
      }
    }
    return wordleAnswer
  } catch (error) {
    // console.log(error) // catches both errors
  }
}

export const getWordByDate = async () => {
  console.log("getUserCanEditBoolean")
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8080"
        : "https://thewordleis-api.herokuapp.com"

    // console.log(baseURL)
    // post data to a url endpoint
    const response = await axios.get(`${baseURL}/api/v1/getWordByDate`)
    console.log(response.data)

    // const usersTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    // let wordleAnswer = ""

    return response.data
  } catch (error) {
    // console.log(error) // catches both errors
  }
}
