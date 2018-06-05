function lgtm() {
  const ss = Array.from(document.querySelectorAll('input'))
  ss[ss.length - 2].click()

  document.querySelector('textarea').value = '你真棒，奖励一朵小红花'

  document.querySelector('a.j-submitbtn').click()

  document.querySelector('a.j-gotonext').click()
  setTimeout(lgtm, 500)
}
