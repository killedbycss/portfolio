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
