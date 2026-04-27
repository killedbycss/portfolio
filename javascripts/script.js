sendEmailEn()

function sendEmailEn() {
  let emEnButton = document.querySelector('#emEn')

  emEnButton.addEventListener('click', () => {
    const email = 'taras.balabaev@gmail.com'
    const subject = encodeURIComponent('Went to you from site')
    const body = encodeURIComponent('Hello! I would to contact with you')

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
    window.location.href = '../indexRu.html'
  } else if (userLang === 'en' && pageLang !== 'en') {
    window.location.href = '../index.html'
  }
})()

function manualSwitch(langPath) {
  localStorage.setItem('language-set', 'true')
  window.location.href = langPath
}
