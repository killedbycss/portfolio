sendEmail()

// Проекты
tbank()

function tbank() {
  let tbankOpen = document.querySelector('#tbank')

  tbankOpen.addEventListener('click', () => {
    window.location.href = 'projectsRu/tbank.html'
  })
}

function sendEmail() {
  let emButton = document.querySelector('#em')

  emButton.addEventListener('click', () => {
    const email = 'taras.balabaev@gmail.com'
    const subject = encodeURIComponent('Пришел к вам с сайта')
    const body = encodeURIComponent('Здравствуйте! Хотел бы связаться с вами')

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  })
}
