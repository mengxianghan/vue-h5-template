export function setNavigationBarTitle(title: string) {
  document.title = title

  // 防止某些场景无法更新标题，例如：微信浏览器
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  document.body.appendChild(iframe)
  iframe.onload = () => {
    setTimeout(() => {
      iframe.remove()
    }, 0)
  }
}

export function noop() {}
