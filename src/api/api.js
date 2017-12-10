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
export function getAdditionalRisk(option) {
  const url = URL

  const data = {
    optioncode: 'prds-01-4new',
    option: JSON.stringify(option),
    platform: 'web',
    secret: 'FxOFz9tPtjFMuOweERxpHw=='
  }

  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

// 添加主险(附加险)确认
export function addRisk() {
  const url = URL

  const option = {
    age: '',
    sex: '',
    userid: 'US161202000000000164',
    prodlist: [
      // {prodkey: 'PR171019000000000005', pageid:'', option:'A', parentprodkey: ''},
      {prodkey: 'PR171019000000000006', pageid:'', option:'A', parentprodkey: ''},
      {prodkey: 'PR110530000000000004', pageid:'', option:'A', parentprodkey:'PR171019000000000005'},
      {prodkey: 'PR110530000000000004', pageid:'', option:'A', parentprodkey:'PR171019000000000006'}
    ],
    allprodlist: [
      {prodkey: 'PR171019000000000005', pageid:'1512890227581442487', parentprodkey:''},
      // {prodkey: 'PR171019000000000006', pageid:'1512369990123872892', parentprodkey:''},
      // {prodkey: 'PR110530000000000004', pageid:'1512369990123872892', parentprodkey:'PR171019000000000005'},
      // {prodkey: 'PR110530000000000004', pageid:'1512369990123872892', parentprodkey:'PR171019000000000006'}
    ]
  }

  const data = {
    optioncode: 'PRDS-01-2new',
    option: JSON.stringify(option),
    platform: 'web',
    secret: 'FxOFz9tPtjFMuOweERxpHw=='
  }

  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}