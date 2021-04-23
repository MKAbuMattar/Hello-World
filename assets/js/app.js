const dom = document.getElementById('app')
const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
const symbolArray = 'أاإىآبتثجحخدذرزسشصضطعغفقكلمنهويءئکوردیی ناوەندیなでしこひまわり上海话文言易语言\u03bc\u03bb!\";#$%&\'()*+,-./:;<=>?@[]^_`{|}~0123456789🆒'.split('')

let arr = []
let con = 0
let conn = 0

capitalize = (s) => {
  if (typeof s !== `string`) return ``
  return s.charAt(0).toUpperCase() + s.slice(1)
}

fetch(`./assets/data/all.json`)
  .then(response => response.json())
  .then(data => {

    const renderLink = (title) => {
      const headerShowli = document.createElement(`li`)
      headerShowUl.appendChild(headerShowli)

      const headerShowliLink = document.createElement(`a`)
      headerShowliLink.textContent = title
      headerShowliLink.href = `#_${title}_`
      headerShowli.appendChild(headerShowliLink)
    }

    const renderAlphabet = (i) => {
      const headerShowliSpan = document.createElement(`span`)
      headerShowli.appendChild(headerShowliSpan)

      const headerShowliLink = document.createElement(`a`)
      headerShowliLink.href = `#__${alphabetArray[i].toUpperCase()}__`
      headerShowliLink.textContent += `${alphabetArray[i]}`
      headerShowliLink.classList.add(`alphabet_mmenu__link`)
      headerShowliSpan.appendChild(headerShowliLink)
    }

    const renderCard = (id, title, description, url, language_short, code) => {
      const card = document.createElement(`div`)
      card.classList.add(`card`)
      card.id = `_${title}_`
      container.appendChild(card)

      const cardTitleContainer = document.createElement(`div`)
      cardTitleContainer.classList.add(`card-title`)
      card.appendChild(cardTitleContainer)

      const cardTitle = document.createElement(`div`)
      cardTitle.classList.add(`card-title`)
      cardTitleContainer.appendChild(cardTitle)

      const cardTitleH1 = document.createElement(`h4`)
      cardTitleH1.classList.add(`lang-name`)
      cardTitleH1.textContent = title
      cardTitle.appendChild(cardTitleH1)

      const cardDescription = document.createElement(`p`)
      if (description !== ``) {
        cardDescription.innerHTML = description
        cardTitle.appendChild(cardDescription)
      }

      const btnGroup = document.createElement(`div`)
      btnGroup.classList.add(`btn-group`)
      card.appendChild(btnGroup)

      const btnCopy = document.createElement(`button`)
      btnCopy.classList.add(`btn`)
      btnCopy.title = `Copy ${title} Code`
      btnGroup.appendChild(btnCopy)

      const btnCopyIcon = document.createElement(`i`)
      btnCopyIcon.classList.add(`icon`)
      btnCopyIcon.classList.add(`copy`)
      btnCopyIcon.classList.add(`code${id}`)
      btnCopyIcon.addEventListener(`click`, (e) => {
        const from = document.getElementById(e.target.classList[2])
        const range = document.createRange()
        window.getSelection().removeAllRanges()
        range.selectNode(from)
        window.getSelection().addRange(range)
        document.execCommand(`copy`)
        window.getSelection().removeAllRanges()
      })
      btnCopy.appendChild(btnCopyIcon)

      const btnLink = document.createElement(`a`)
      if (url !== ``) {
        btnLink.classList.add(`btn`)
        btnLink.href = url
        btnLink.setAttribute(`target`, `__blank`)
        btnGroup.appendChild(btnLink)
      }

      const btnLinkIcon = document.createElement(`i`)
      btnLinkIcon.classList.add(`icon`)
      btnLinkIcon.classList.add(`link`)
      btnLink.appendChild(btnLinkIcon)

      const cardCode = document.createElement(`pre`)
      cardCode.id = `code${id}`
      card.appendChild(cardCode)

      const cardCodeContainer = document.createElement(`code`)
      cardCodeContainer.textContent = code
      cardCodeContainer.classList.add(`hljs`)
      if (language_short !== ``) {
        cardCodeContainer.classList.add(`${language_short}`)
      }
      cardCode.appendChild(cardCodeContainer)
    }

    const header = document.createElement(`header`)
    header.classList.add(`header`)
    dom.appendChild(header)

    const headerDiv = document.createElement(`div`)
    header.appendChild(headerDiv)

    const headerTitle = document.createElement(`h1`)
    headerTitle.textContent = `Hello World`
    headerDiv.appendChild(headerTitle)

    const headerTitleSpan = document.createElement(`span`)
    headerTitleSpan.textContent = ` in ${data.length} programming languages`
    headerTitle.appendChild(headerTitleSpan)

    const headerText = document.createElement(`p`)
    headerText.textContent = `Lest of Programming Languages: `
    headerDiv.appendChild(headerText)

    const headerbr = document.createElement(`br`)
    headerDiv.appendChild(headerbr)

    const headerShowbtn = document.createElement(`button`)
    headerShowbtn.textContent = `Show`
    headerShowbtn.classList.add(`show`)
    headerShowbtn.id = `swap`

    headerShowbtn.addEventListener(`click`, () => {
      const toggle = document.getElementById(`toggle`)
      const swap = document.getElementById(`swap`)
      if (toggle.style.display === `block`) {
        toggle.style.display = `none`
      } else {
        toggle.style.display = `block`
      }

      if (swap.textContent === `Show`) {
        swap.textContent = `Hied`
      } else {
        swap.textContent = `Show`
      }
    })

    headerDiv.appendChild(headerShowbtn)

    const headerShowDiv = document.createElement(`div`)
    headerShowDiv.id = `toggle`
    headerDiv.appendChild(headerShowDiv)

    const headerShowUl = document.createElement(`ul`)
    headerShowDiv.appendChild(headerShowUl)

    const headerShowli = document.createElement(`li`)
    headerShowli.classList.add(`alphabet_mmenu`)
    headerShowUl.appendChild(headerShowli)

    const headerShowliSpan = document.createElement(`span`)
    headerShowli.appendChild(headerShowliSpan)

    const headerShowliLink = document.createElement(`a`)
    headerShowliLink.href = `#__#__`
    headerShowliLink.textContent = `#`
    headerShowliLink.classList.add(`alphabet_mmenu__link`)
    headerShowliSpan.appendChild(headerShowliLink)

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

      renderAlphabet(i)

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

    const headerShowliSpanList = document.createElement(`span`)
    headerShowliSpanList.textContent = `#`
    headerShowliSpanList.id = `__#__`
    headerShowUl.appendChild(headerShowliSpanList)

    const headerShowliSpanMark = document.createElement(`mark`)
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

      const headerShowliSpanListAlphabet = document.createElement(`span`)
      headerShowliSpanListAlphabet.textContent = `${alphabetArray[i].toUpperCase()}`
      headerShowliSpanListAlphabet.id = `__${alphabetArray[i].toUpperCase()}__`
      headerShowUl.appendChild(headerShowliSpanListAlphabet)

      const headerShowliSpanMarkAlphabet = document.createElement(`mark`)
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

    const main = document.createElement(`main`)
    dom.appendChild(main)

    const searchSection = document.createElement(`section`)
    searchSection.classList.add(`search-section`)
    main.appendChild(searchSection)

    const searchInput = document.createElement(`input`)
    searchInput.classList.add(`search-input`)
    searchInput.type = `text`
    searchInput.placeholder = `Search`

    searchInput.addEventListener(`keyup`, (e) => {
      let cards = document.querySelectorAll(`.card-section .card`)
      let searchTerm = ``
      let title = ``
      searchTerm = e.target.value.toLowerCase()
      cards.forEach((card) => {
        title = card.firstElementChild.firstElementChild.firstElementChild.textContent.toLowerCase()
        title.includes(searchTerm) ? card.style.display = `flex` : card.style.display = `none`
      })
    })

    searchSection.appendChild(searchInput)

    const cardSection = document.createElement(`section`)
    cardSection.classList.add(`card-section`)
    main.appendChild(cardSection)

    const container = document.createElement(`section`)
    container.classList.add(`container`)
    cardSection.appendChild(container)

    for (let i in symbolArray) {

      for (let j in data) {

        let id = data[j].id
        let title = capitalize(data[j].title)
        let description = data[j].description
        let language_short = data[j].language_short
        let url = data[j].url
        let code = data[j].code

        if (title.charAt(0).toLowerCase() === symbolArray[i]) {
          renderCard(id, title, description, url, language_short, code)
        }
      }
    }

    for (let i in alphabetArray) {

      for (let j in data) {

        let id = data[j].id
        let title = capitalize(data[j].title)
        let description = data[j].description
        let language_short = data[j].language_short
        let url = data[j].url
        let code = data[j].code

        if (title.charAt(0).toLowerCase() === alphabetArray[i]) {
          renderCard(id, title, description, url, language_short, code)
        }
      }
    }

    const footer = document.createElement(`footer`)
    footer.innerHTML = `<p> All Copyrights Reserved &#169; 2019 ${(new Date().getFullYear() > 2019) ? (` - ` + new Date().getFullYear()) : (``)}, Made With <mark>❤</mark> & a lot ☕ By <a href="https://mkabumattar.github.io/">Mohammad Khaled Abu Mattar</a> </p>`
    dom.appendChild(footer)

  })

if (`serviceWorker` in navigator) {
  window.addEventListener(`load`, () => {
    navigator.serviceWorker.register(`./sw.js`).then((registration) => {
      console.log(`ServiceWorker registration successful with scope: `, registration
        .scope)
    }, (err) => {
      console.log(`ServiceWorker registration failed: `, err)
    })
  })
}

const mybutton = document.getElementById(`myBtn`)

mybutton.addEventListener(`click`, () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

const scrollFunction = () => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = `block`
  } else {
    mybutton.style.display = `none`
  }
}

window.onscroll = () => {
  scrollFunction()
}

let deferredPrompt;
const addBtn = document.querySelector(`.add-button`)
addBtn.style.display = `none`

window.addEventListener(`beforeinstallprompt`, (e) => {
  e.preventDefault()
  deferredPrompt = e
  addBtn.style.display = `block`
  addBtn.addEventListener(`click`, (e) => {
    addBtn.style.display = `none`
    deferredPrompt.prompt()
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === `accepted`) {
        console.log(`User accepted the A2HS prompt`)
      } else {
        console.log(`User dismissed the A2HS prompt`)
      }
      deferredPrompt = null
    })
  })
})

window.addEventListener(`beforeinstallprompt`, (beforeInstallPromptEvent) => {
  beforeInstallPromptEvent.preventDefault()
  installButton.addEventListener(`click`, (mouseEvent) => {
    beforeInstallPromptEvent.prompt()
  })
  installButton.hidden = false
})
