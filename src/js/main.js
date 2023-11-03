import Lenis from '@studio-freight/lenis'


const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-menu')
const smoke = document.querySelector('.smoke')
const body = document.body

if(burger) {
  burger.addEventListener('click', e => {
    e.preventDefault()

    burger.classList.toggle('active')
    mobileMenu.classList.toggle('active')
    smoke.classList.toggle('active')
    body.classList.toggle('active')
  })
}


const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf) 



var whiteSmokeItemStart = document.querySelector('#whitesmoke_2_')
var whiteSmokeItemEnd = document.querySelector('#whitesmoke_56_')
var whiteSmokeTlm = document.querySelector('#SMOKE1')

whiteSmokeTlm = new gsap.timeline()


whiteSmokeItemStart = {
  y: 0,
  x: 'random(-10, 30)',
  scale: 0.5,
  opacity: 0.3,
}
whiteSmokeItemEnd = {
  y: -600,
  x: 'random(-30, 40)',
  stagger: {
    each: 0.1,
    repeat: -1,
    repeatRefresh: true,
  },
  duration: 'random(5, 6)',
  transformOrigin: '50% 50%',
  scale: 'random(1, 2)',
  opacity: 0,
  ease: 'none',
}


whiteSmokeTlm
  .fromTo('#whitesmokes circle', whiteSmokeItemStart, whiteSmokeItemEnd, 0)
  .seek(100)


