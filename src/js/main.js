
// const burger = document.querySelector('.burger')
// const mobileMenu = document.querySelector('.mobile-menu')
// const particlesContainer = document.querySelector('.particles-container')

// if(burger) {
//   burger.addEventListener('click', e => {
//     e.preventDefault()

//     for (let i = 0; i < 30; i++) {
//       const particle = document.createElement('div')
//       particle.classList.add('particle')
//       particlesContainer.appendChild(particle)

//       const x = Math.random() * 60
//       const y = Math.random() * 60
//       particle.style.left = `${x}px`
//       particle.style.top = `${y}px`

//       setTimeout(() => {
//         particle.remove()
//       }, 1000)
//     }

//     burger.classList.toggle('active')
//     mobileMenu.classList.toggle('active')
//   })
// }

const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-menu')
const particlesContainer = document.querySelector('.particles-container')

if (burger) {
  burger.addEventListener('click', e => {
    e.preventDefault()

    for (let i = 0; i < 100; i++) {
      const particle = document.createElement('div')
      particle.classList.add('particle')
      particlesContainer.appendChild(particle)

      const x = Math.random() * 60
      const y = Math.random() * 60
      particle.style.left = `${x}px`
      particle.style.top = `${y}px`

      setTimeout(() => {
        particle.remove()
      }, 3000)
    }

    burger.classList.toggle('active')
    mobileMenu.classList.toggle('active')
  })
}

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}