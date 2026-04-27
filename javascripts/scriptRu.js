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
