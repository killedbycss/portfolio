sendEmail()

// Проекты
projects()

function projects() {
  let foresightOpen = document.querySelector('#foresight')
  let balancewayOpen = document.querySelector('#balanceway')
  let bimbookOpen = document.querySelector('#bimbook')
  let dosugOpen = document.querySelector('#dosug')

  foresightOpen.addEventListener('click', () => {
    window.location.href = 'projectsRu/foresight.html'
  })

  balancewayOpen.addEventListener('click', () => {
    window.location.href = 'projectsRu/balanceway.html'
  })

  bimbookOpen.addEventListener('click', () => {
    window.location.href = 'projectsRu/bimbook.html'
  })

  dosugOpen.addEventListener('click', () => {
    window.location.href = 'projectsRu/dosug.html'
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
