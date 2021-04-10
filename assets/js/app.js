t0 = performance.now()

dom = document.getElementById('app')
alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
symbolArray = 'أاإىآبتثجحخدذرزسشصضطعغفقكلمنهويءئ\u03bc\u03bb!\";#$%&\'()*+,-./:;<=>?@[]^_`{|}~0123456789'.split('')

arr = []
con = 0
conn = 0

capitalize = (s) => {
  if (typeof s !== `string`) return ``
  return s.charAt(0).toUpperCase() + s.slice(1)
}

fetch(`./assets/data/all.json`)
  .then(response => response.json())
  .then(data => {

    renderAlphabet = () => {
      headerShowliSpan = document.createElement(`span`)
      headerShowli.appendChild(headerShowliSpan)

      headerShowliLink = document.createElement(`a`)
      headerShowliLink.href = `#__${alphabetArray[i].toUpperCase()}__`
      headerShowliLink.textContent += `${alphabetArray[i]}`
      headerShowliLink.classList.add(`alphabet_mmenu__link`)
      headerShowliSpan.appendChild(headerShowliLink)
    }

    renderLink = () => {
      headerShowli = document.createElement(`li`)
      headerShowUl.appendChild(headerShowli)

      headerShowliLink = document.createElement(`a`)
      headerShowliLink.textContent = title
      headerShowliLink.href = `#_${title}_`
      headerShowli.appendChild(headerShowliLink)
    }

    renderCard = () => {
      card = document.createElement(`div`)
      card.classList.add(`card`)
      card.id = `_${title}_`
      container.appendChild(card)

      cardTitleContainer = document.createElement(`div`)
      cardTitleContainer.classList.add(`card-title`)
      card.appendChild(cardTitleContainer)

      cardTitle = document.createElement(`div`)
      cardTitle.classList.add(`card-title`)
      cardTitleContainer.appendChild(cardTitle)

      cardTitleH1 = document.createElement(`h4`)
      cardTitleH1.classList.add(`lang-name`)
      cardTitleH1.textContent = title
      cardTitle.appendChild(cardTitleH1)

      cardDescription = document.createElement(`p`)
      cardDescription.textContent = description
      cardTitle.appendChild(cardDescription)

      btnGroup = document.createElement(`div`)
      btnGroup.classList.add(`btn-group`)
      card.appendChild(btnGroup)

      btnCopy = document.createElement(`button`)
      btnCopy.classList.add(`btn`)
      btnCopy.title = `Copy`
      btnGroup.appendChild(btnCopy)

      btnCopyIcon = document.createElement(`i`)
      btnCopyIcon.classList.add(`icon`)
      btnCopyIcon.classList.add(`copy`)
      btnCopyIcon.classList.add(`code${id}`)
      btnCopyIcon.addEventListener(`click`, (e) => {
        from = document.getElementById(e.target.classList[2])
        range = document.createRange()
        window.getSelection().removeAllRanges()
        range.selectNode(from)
        window.getSelection().addRange(range)
        document.execCommand(`copy`)
        window.getSelection().removeAllRanges()
      })
      btnCopy.appendChild(btnCopyIcon)

      btnLink = document.createElement(`a`)
      btnLink.classList.add(`btn`)
      btnLink.href = ``
      btnGroup.appendChild(btnLink)

      btnLinkIcon = document.createElement(`i`)
      btnLinkIcon.classList.add(`icon`)
      btnLinkIcon.classList.add(`link`)
      btnLink.appendChild(btnLinkIcon)

      cardCode = document.createElement(`pre`)
      cardCode.id = `code${id}`
      card.appendChild(cardCode)

      cardCodeContainer = document.createElement(`code`)
      cardCodeContainer.textContent = code
      cardCodeContainer.setAttribute(`class`, `${language_short} hljs`)
      cardCode.appendChild(cardCodeContainer)
    }

    header = document.createElement(`header`)
    header.classList.add(`first-section`)
    dom.appendChild(header)

    headerDiv = document.createElement(`div`)
    header.appendChild(headerDiv)

    headerTitle = document.createElement(`h1`)
    headerTitle.textContent = `Hello World`
    headerDiv.appendChild(headerTitle)

    headerTitleSpan = document.createElement(`span`)
    headerTitleSpan.textContent = ` in ${data.length} programming languages`
    headerTitle.appendChild(headerTitleSpan)

    headerText = document.createElement(`p`)
    headerText.textContent = `Lest of Programming Languages: `
    headerDiv.appendChild(headerText)

    headerbr = document.createElement(`br`)
    headerDiv.appendChild(headerbr)

    headerShowbtn = document.createElement(`button`)
    headerShowbtn.textContent = `Show`
    headerShowbtn.classList.add(`show`)
    headerShowbtn.id = `swap`

    headerShowbtn.addEventListener(`click`, () => {
      toggle = document.getElementById(`toggle`)
      swap = document.getElementById(`swap`)

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

    headerShowDiv = document.createElement(`div`)
    headerShowDiv.id = `toggle`
    headerDiv.appendChild(headerShowDiv)

    headerShowUl = document.createElement(`ul`)
    headerShowDiv.appendChild(headerShowUl)

    headerShowli = document.createElement(`li`)
    headerShowli.classList.add(`alphabet_mmenu`)
    headerShowUl.appendChild(headerShowli)

    headerShowliSpan = document.createElement(`span`)
    headerShowli.appendChild(headerShowliSpan)

    headerShowliLink = document.createElement(`a`)
    headerShowliLink.href = `#__#__`
    headerShowliLink.textContent = `#`
    headerShowliLink.classList.add(`alphabet_mmenu__link`)
    headerShowliSpan.appendChild(headerShowliLink)

    for (i in symbolArray) {
      for (j in data) {
        title = capitalize(data[j].title)
        if (title.charAt(0).toLowerCase() === symbolArray[i]) {
          conn++
        }
        arr[con] = conn
      }

    }
    conn = 0
    con++

    for (i in alphabetArray) {

      renderAlphabet()

      for (j in data) {
        title = capitalize(data[j].title)
        if (title.charAt(0).toLowerCase() === alphabetArray[i]) {
          conn++
        }
      }
      arr[con] = conn
      conn = 0
      con++
    }

    headerShowliSpanList = document.createElement(`span`)
    headerShowliSpanList.textContent = `#`
    headerShowliSpanList.id = `__#__`
    headerShowUl.appendChild(headerShowliSpanList)

    headerShowliSpanMark = document.createElement(`mark`)
    headerShowliSpanMark.textContent = ` ${arr[0]} Languages Programming`
    headerShowliSpanList.appendChild(headerShowliSpanMark)

    for (i in symbolArray) {
      for (j in data) {
        id = data[j].id
        title = capitalize(data[j].title)
        if (title.charAt(0).toLowerCase() === symbolArray[i]) {
          renderLink()
        }
      }
    }

    conn = 1

    for (i in alphabetArray) {

      headerShowliSpanListAlphabet = document.createElement(`span`)
      headerShowliSpanListAlphabet.textContent = `${alphabetArray[i].toUpperCase()}`
      headerShowliSpanListAlphabet.id = `__${alphabetArray[i].toUpperCase()}__`
      headerShowUl.appendChild(headerShowliSpanListAlphabet)

      headerShowliSpanMarkAlphabet = document.createElement(`mark`)
      headerShowliSpanMarkAlphabet.textContent = ` ${arr[conn]} Languages Programming`
      headerShowliSpanListAlphabet.appendChild(headerShowliSpanMarkAlphabet)

      for (j in data) {
        id = data[j].id
        title = capitalize(data[j].title)
        if (title.charAt(0).toLowerCase() === alphabetArray[i]) {
          renderLink()
        }
      }
    }

    searchSection = document.createElement(`div`)
    searchSection.classList.add(`search-section`)
    dom.appendChild(searchSection)

    searchInput = document.createElement(`input`)
    searchInput.classList.add(`search-input`)
    searchInput.type = `text`
    searchInput.placeholder = `Search`

    searchInput.addEventListener(`keyup`, (e) => {
      cards = document.querySelectorAll(`.main-wrapper .card`)
      searchTerm = ``
      title = ``
      searchTerm = e.target.value.toLowerCase()
      cards.forEach((card) => {
        title = card.firstElementChild.firstElementChild.textContent.toLowerCase()
        title.includes(searchTerm) ? card.style.display = `flex` : card.style.display = `none`
      })
    })

    searchSection.appendChild(searchInput)

    main = document.createElement(`main`)
    main.classList.add(`main-wrapper`)
    dom.appendChild(main)

    container = document.createElement(`div`)
    container.classList.add(`container`)
    main.appendChild(container)

    for (i in symbolArray) {

      for (j in data) {

        id = data[j].id
        title = capitalize(data[j].title)
        description = data[j].description
        language_short = data[j].language_short
        code = data[j].code

        if (title.charAt(0).toLowerCase() === symbolArray[i]) {
          renderCard()
        }
      }
    }

    for (i in alphabetArray) {

      for (j in data) {

        id = data[j].id
        title = capitalize(data[j].title)
        description = data[j].description
        language_short = data[j].language_short
        code = data[j].code

        if (title.charAt(0).toLowerCase() === alphabetArray[i]) {
          renderCard()
        }
      }
    }

  })

if (`serviceWorker` in navigator) {
  window.addEventListener(`load`, () => {
    navigator.serviceWorker.register(`/Hello-World/sw.js`).then((registration) => {
      console.log(`ServiceWorker registration successful with scope: `, registration
        .scope)
    }, function (err) {
      console.log(`ServiceWorker registration failed: `, err)
    })
  })
}

mybutton = document.getElementById(`myBtn`)

mybutton.addEventListener(`click`, () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

window.onscroll = () => {
  scrollFunction()
}

scrollFunction = () => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = `block`
  } else {
    mybutton.style.display = `none`
  }
}

addBtn = document.querySelector(`.add-button`)
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

t1 = performance.now()

console.log(`Call to doSomething took ${t1 - t0} milliseconds.`)
