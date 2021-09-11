import axios from 'axios'
import URL from 'constants/Endpoints'

const dataService = {
  // Get racing data from API
  async getData() {
    const option = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      url: `${URL.BASE_URL}`,
    }
    try {
      let res = await axios(option)
      console.log(res)
      return res.data
    } catch (err) {
      console.error(err)
      throw new Error(err.response.data.message)
    }
  },
}

export default dataService
