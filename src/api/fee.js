import qs from 'qs'
import axios from 'axios'

const URL = 'https://app.ibaodian.com/webh5.shtml'

export function postAA() {
  const url = URL

  const data = {
    optioncode: 'sys-03',
    option: "{\"lastupdatetime\":\"\"}",
    platform: 'web',
    secret: 'FxOFz9tPtjFMuOweERxpHw=='
  }

  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}