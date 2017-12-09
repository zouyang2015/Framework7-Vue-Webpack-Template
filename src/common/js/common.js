// toast('您点击了弹框按钮您点击了！',3000)
export function toast(msg, duration= 3000) {
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
