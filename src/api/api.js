import qs from 'qs'
import axios from 'axios'

const URL = 'https://app.ibaodian.com/webh5.shtml'

// 基础数据(公司名称key)
export function getBaseInfo() {
  const url = URL

  const data = {
    optioncode: 'sys-03',
    option: JSON.stringify({"lastupdatetime": ""}),
    platform: 'web',
    secret: 'FxOFz9tPtjFMuOweERxpHw=='
  }

  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

// 获取产品详情
export function getProductDetail(prodkey = '') {
  const url = URL

  const data = {
    optioncode: 'prds-01new',
    option: JSON.stringify({"prodkey": prodkey, "userid": "US161202000000000164"}),
    platform: 'web',
    secret: 'FxOFz9tPtjFMuOweERxpHw=='
  }

  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

// 获取主页推荐产品、添加主险
export function getMainRisk(pk_comp = '') {
  const url = URL

  const data = {
    optioncode: 'HP-02',
    option: JSON.stringify({"pk_comp": pk_comp}),
    platform: 'web',
    secret: 'FxOFz9tPtjFMuOweERxpHw=='
  }

  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

// 获取添加附加险