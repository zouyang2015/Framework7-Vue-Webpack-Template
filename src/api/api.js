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
      if (res.status === '0') {
        return Promise.resolve(res.data)
      } else {
        if (typeof res.msg === 'undefined' || res.msg === 'null' || res.msg === '') {
          window.f7.alert('出错了', null)
        } else {
          window.f7.alert(res.msg, null)
        }
        window.f7.hideIndicator()
      }
    })
}

// 搜索、点击产品分类中标签搜索 sch-01
export function getSearch(option) {
  const url = URL

  const data = {
    optioncode: 'sch-01',
    option: JSON.stringify(option),
    platform: 'web',
    secret: 'FxOFz9tPtjFMuOweERxpHw=='
  }

  return axios.post(url, qs.stringify(data))
    .then((res) => {
      if (res.status === '0') {
        return Promise.resolve(res.data)
      } else {
        if (typeof res.msg === 'undefined' || res.msg === 'null' || res.msg === '') {
          window.f7.alert('出错了', null)
        } else {
          window.f7.alert(res.msg, null)
        }
        window.f7.hideIndicator()
      }
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
      if (res.status === '0') {
        return Promise.resolve(res.data)
      } else {
        if (typeof res.msg === 'undefined' || res.msg === 'null' || res.msg === '') {
          window.f7.alert('出错了', null)
        } else {
          window.f7.alert(res.msg, null)
        }
        window.f7.hideIndicator()
      }
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
      if (res.status === '0') {
        return Promise.resolve(res.data)
      } else {
        if (typeof res.msg === 'undefined' || res.msg === 'null' || res.msg === '') {
          window.f7.alert('出错了', null)
        } else {
          window.f7.alert(res.msg, null)
        }
        window.f7.hideIndicator()
      }
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
      if (res.status === '0') {
        return Promise.resolve(res.data)
      } else {
        if (typeof res.msg === 'undefined' || res.msg === 'null' || res.msg === '') {
          window.f7.alert('出错了', null)
        } else {
          window.f7.alert(res.msg, null)
        }
        window.f7.hideIndicator()
      }
    })
}

// 添加主险(附加险)确认
export function addRisk(option) {
  const url = URL

  const data = {
    optioncode: 'PRDS-01-2new',
    option: JSON.stringify(option),
    platform: 'web',
    secret: 'FxOFz9tPtjFMuOweERxpHw=='
  }

  return axios.post(url, qs.stringify(data))
    .then((res) => {
      if (res.status === '0') {
        return Promise.resolve(res.data)
      } else {
        if (typeof res.msg === 'undefined' || res.msg === 'null' || res.msg === '') {
          window.f7.alert('出错了', null)
        } else {
          window.f7.alert(res.msg, null)
        }
        window.f7.hideIndicator()
      }
    })
}

// 算费参数变化prds-06new
export function feeCalculation(option) {
  const url = URL

  const data = {
    optioncode: 'prds-06new',
    option: JSON.stringify(option),
    platform: 'web',
    secret: 'FxOFz9tPtjFMuOweERxpHw=='
  }

  return axios.post(url, qs.stringify(data))
    .then((res) => {
      if (res.status === '0') {
        return Promise.resolve(res.data)
      } else {
        if (typeof res.msg === 'undefined' || res.msg === 'null' || res.msg === '') {
          window.f7.alert('出错了', null)
        } else {
          window.f7.alert(res.msg, null)
        }
        window.f7.hideIndicator()
      }
    })
}

// 保险利益PRDS-02
export function benefit(option) {
  const url = URL

  const data = {
    optioncode: 'PRDS-02',
    option: JSON.stringify(option),
    platform: 'web',
    secret: 'FxOFz9tPtjFMuOweERxpHw=='
  }

  return axios.post(url, qs.stringify(data))
    .then((res) => {
      if (res.status === '0') {
        return Promise.resolve(res.data)
      } else {
        if (typeof res.msg === 'undefined' || res.msg === 'null' || res.msg === '') {
          window.f7.alert('出错了', null)
        } else {
          window.f7.alert(res.msg, null)
        }
        window.f7.hideIndicator()
      }
    })
}

// 条款全文PRD-03
export function download(option) {
  const url = URL

  const data = {
    optioncode: 'PRD-03',
    option: JSON.stringify(option),
    platform: 'web',
    secret: 'FxOFz9tPtjFMuOweERxpHw=='
  }

  return axios.post(url, qs.stringify(data))
    .then((res) => {
      if (res.status === '0') {
        return Promise.resolve(res.data)
      } else {
        if (typeof res.msg === 'undefined' || res.msg === 'null' || res.msg === '') {
          window.f7.alert('出错了', null)
        } else {
          window.f7.alert(res.msg, null)
        }
        window.f7.hideIndicator()
      }
    })
}

// 10.投保规则PRD-04
export function getRule(option) {
  const url = URL

  const data = {
    optioncode: 'PRD-04',
    option: JSON.stringify(option),
    platform: 'web',
    secret: 'FxOFz9tPtjFMuOweERxpHw=='
  }

  return axios.post(url, qs.stringify(data))
    .then((res) => {
      if (res.status === '0') {
        return Promise.resolve(res.data)
      } else {
        if (typeof res.msg === 'undefined' || res.msg === 'null' || res.msg === '') {
          window.f7.alert('出错了', null)
        } else {
          window.f7.alert(res.msg, null)
        }
        window.f7.hideIndicator()
      }
    })
}