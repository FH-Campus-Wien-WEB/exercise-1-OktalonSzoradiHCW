/* eslint-env browser */

function reverseString (s) {
  return s.split('').reverse().join('')
}

window.onload = function () {
  const xhr = new XMLHttpRequest()
  xhr.onload = function () {
    const appElement = document.querySelector('#app')
    if (xhr.status === 200) {
      /* Part 2: Build the HTML elements here and append them to the body */
      appElement.append(reverseString(xhr.responseText))
    } else {
      appElement.append(
        'Data could not be loaded. Status ' +
          xhr.status +
          ' - ' +
          xhr.statusText
      )
    }
  }
  xhr.open('GET', '/movies')
  xhr.send()
}
