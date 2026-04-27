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
