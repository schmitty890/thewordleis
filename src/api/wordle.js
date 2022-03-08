import axios from "axios"

export const getWordleFromBackend = async () => {
  console.log("getUserCanEditBoolean")
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? process.env.LOCALHOST
        : process.env.SERVER_URL

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
  console.log("getWordByDate")

  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? process.env.LOCALHOST
        : process.env.SERVER_URL

    var dateObj = new Date()
    var month = dateObj.getMonth() + 1 //months from 1-12
    var day = dateObj.getDate()
    var year = dateObj.getFullYear()

    // console.log(baseURL)
    // post data to a url endpoint
    const response = await axios.get(
      `${baseURL}${process.env.GET_WORD_BY_DATE}`,
      {
        params: {
          day,
          month,
          year,
        },
      }
    )
    console.log(response.data)

    // const usersTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    // let wordleAnswer = ""

    return response.data
  } catch (error) {
    // console.log(error) // catches both errors
  }
}
