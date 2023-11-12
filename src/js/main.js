import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
// import form from './form.js'

import ScrollTrigger from 'gsap/ScrollTrigger.js'
// import ScrollTrigger from 'gsap/ScrollTrigger.js'

gsap.registerPlugin(ScrollTrigger)

const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-menu')
const smoke = document.querySelector('.smoke')
const body = document.body

if (burger) {
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

// form()

ScrollTrigger.create({})

// document.querySelectorAll('.ui .btn').forEach(item => {
//   ScrollTrigger.create({
//     trigger: item,
//     animation: gsap.from(item, {
//       opacity: 0,
//       y: 50,
//     }),
//   })
// })

const tl = gsap.timeline()

document.querySelectorAll('p, h1, h2, h3, h4, h5, li').forEach(i => {
  ScrollTrigger.create({
    trigger: i,
    animation: gsap.from(i, {
      opacity: 0,
      y: 100
    })
  })
})


//..............................acordion.............................//

const accordionItems = document.querySelectorAll('.accordion-item')
const accordionTexts = document.querySelectorAll('.accordion-item__text')
const accordionTitles = document.querySelectorAll('.accordion-item__title')

accordionItems.forEach((accordionItem, index) => {
  accordionItem.addEventListener('click', e => {
    e.preventDefault()

        accordionItems.forEach((item, i) => {
          if (i !== index) {
            item.classList.remove('active')
            accordionTexts[i].classList.remove('active')
            accordionTitles[i].classList.remove('active')
          }
        })

    accordionItem.classList.toggle('active')
    accordionTexts[index].classList.toggle('active')
    accordionTitles[index].classList.toggle('active')
  })
})
