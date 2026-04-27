sendEmail()

function sendEmail() {
  let emButton = document.querySelector('#em')

  emButton.addEventListener('click', () => {
    const email = 'taras.balabaev@gmail.com'
    const subject = encodeURIComponent('Пришел к вам с сайта')
    const body = encodeURIComponent('Здравствуйте! Хотел бы связаться с вами')

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  })
}

;(function () {
  if (localStorage.getItem('language-set')) return

  const userLang = (navigator.language || navigator.userLanguage)
    .substring(0, 2)
    .toLowerCase()
  const pageLang = document.documentElement.lang.toLowerCase()

  if (userLang === 'ru' && pageLang !== 'ru') {
    window.location.href = 'indexRu.html'
  } else if (userLang === 'en' && pageLang !== 'en') {
    window.location.href = 'index.html'
  }
})()

function manualSwitch(langPath) {
  localStorage.setItem('language-set', 'true')
  window.location.href = langPath
}
