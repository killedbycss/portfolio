sendEmailEn()
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

function sendEmailEn() {
  let emEnButton = document.querySelector('#emEn')

  emEnButton.addEventListener('click', () => {
    const email = 'taras.balabaev@gmail.com'
    const subject = encodeURIComponent('Went to you from site')
    const body = encodeURIComponent('Hello! I would to contact with you')

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  })
}
