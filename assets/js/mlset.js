const dom = document.getElementById('app')
const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
const symbolArray =
  'أاإىآبتثجحخدذرزسشصضطعغفقكلمنهويءئکوردیی ناوەندیなでしこひまわり上海话文言易语言火星文한국어\u03bc\u03bb!";#$%&\'()*+,-./:;<=>?@[]^_`{|}~ᚱᚢᚾᛅᛦ∗0123456789🆒ΙΧΘΥΣ'.split(
    '',
  )

let arr = []
let con = 0
let conn = 0

const capitalize = (s) => {
  if (typeof s !== `string`) return ``
  return s.charAt(0).toUpperCase() + s.slice(1)
}

fetch(`./assets/data/data.json`)
  .then((response) => response.json())
  .then((data) => {
    const renderLink = (title) => {
      const headerShowli = document.createElement(`li`)
      headerShowli.textContent = title
      headerShowUl.appendChild(headerShowli)
    }

    const headerShowUl = document.createElement(`ul`)
    dom.appendChild(headerShowUl)

    for (let i in symbolArray) {
      for (let j in data) {
        let title = capitalize(data[j].title)
        if (title.charAt(0).toLowerCase() === symbolArray[i]) {
          conn++
        }
        arr[con] = conn
      }
    }
    conn = 0
    con++

    for (let i in alphabetArray) {
      for (let j in data) {
        title = capitalize(data[j].title)
        if (title.charAt(0).toLowerCase() === alphabetArray[i]) {
          conn++
        }
      }
      arr[con] = conn
      conn = 0
      con++
    }

    const headerShowliSpanList = document.createElement(`h2`)
    headerShowliSpanList.textContent = `#`
    headerShowliSpanList.id = `__#__`
    headerShowUl.appendChild(headerShowliSpanList)

    const headerShowliSpanMark = document.createElement(`span`)
    headerShowliSpanMark.textContent = ` ${arr[0]} Languages Programming`
    headerShowliSpanList.appendChild(headerShowliSpanMark)

    for (let i in symbolArray) {
      for (let j in data) {
        let title = capitalize(data[j].title)
        if (title.charAt(0).toLowerCase() === symbolArray[i]) {
          renderLink(title)
        }
      }
    }

    conn = 1

    for (let i in alphabetArray) {
      const headerShowliSpanListAlphabet = document.createElement(`h2`)
      headerShowliSpanListAlphabet.textContent = `${alphabetArray[
        i
      ].toUpperCase()}`
      headerShowliSpanListAlphabet.id = `__${alphabetArray[i].toUpperCase()}__`
      headerShowUl.appendChild(headerShowliSpanListAlphabet)

      const headerShowliSpanMarkAlphabet = document.createElement(`span`)
      headerShowliSpanMarkAlphabet.textContent = ` ${arr[conn]} Languages Programming`
      headerShowliSpanListAlphabet.appendChild(headerShowliSpanMarkAlphabet)

      for (let j in data) {
        let title = capitalize(data[j].title)
        if (title.charAt(0).toLowerCase() === alphabetArray[i]) {
          renderLink(title)
        }
      }
      conn++
    }
  })
