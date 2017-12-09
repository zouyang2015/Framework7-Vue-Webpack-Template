// toast('您点击了弹框按钮您点击了！',3000)
export function toast(msg, duration = 3000) {
  var m = document.createElement('div')
  m.style.cssText = 'position:fixed; top:85%; width:100%; z-index:999999;text-align:center; '
  document.body.appendChild(m)
  var n = document.createElement('div')
  n.innerHTML = msg
  n.style.cssText = 'background:#000000; color:#fff;opacity:0.8;border-radius:4px;text-align: center;display: inline-block;max-width: 70%;min-width:100px;margin: 0 auto;padding: 6px 20px;line-height: 20px; font-size: 16px;'
  m.appendChild(n)
  setTimeout(function () {
    var d = 0.5
    n.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in'
    n.style.opacity = '0'
    setTimeout(function () {
      document.body.removeChild(m)
    }, d * 1000)
  }, duration)
}

// 日期转周岁
export function jsGetAge(strBirthday, expectDate) {
  if (strBirthday === "" || !strBirthday) {
    return ""
  }
  var returnAge
  var strBirthdayArr = strBirthday.split('-')
  var birthYear = strBirthdayArr[0]
  var birthMonth = strBirthdayArr[1]
  var birthDay = strBirthdayArr[2]

  var d = (expectDate && expectDate !== "") ? new Date(expectDate) : new Date()
  var nowYear = d.getFullYear()
  var nowMonth = d.getMonth() + 1
  var nowDay = d.getDate()

  if (nowYear == birthYear) {
    returnAge = 0// 同年 则为0岁
  } else {
    var ageDiff = nowYear - birthYear // 年之差
    if (ageDiff > 0) {
      if (nowMonth == birthMonth) {
        var dayDiff = nowDay - birthDay// 日之差
        if (dayDiff < 0) {
          returnAge = ageDiff - 1
        } else {
          returnAge = ageDiff
        }
      } else {
        var monthDiff = nowMonth - birthMonth// 月之差
        if (monthDiff < 0) {
          returnAge = ageDiff - 1
        } else {
          returnAge = ageDiff
        }
      }
    } else {
      returnAge = -1// 返回-1 表示出生日期输入错误 晚于今天
      //myApp.alert('出生日期不能大于当前日期')
    }
  }
  return returnAge// 返回周岁年龄
}
