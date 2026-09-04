gsap.to('#page2 h1', {
    transform: 'translateX(-300%)',
    scrollTrigger:{
        trigger: '#page2',
        scroller: 'body',
        scrub: 2,
        start: 'top 0%',
        end: 'top -200%',
        pin: true
    }
})

const h3 = document.querySelector('#page1 h3')
let h3Text = h3.textContent

let splittedText = h3Text.split('')
const halfVal = splittedText.length / 2

let clutter = ''

splittedText.forEach((elem, idx)=>{
    if(halfVal > idx){
    clutter += `<span class="a">${elem}</span>`
    } else {
        clutter += `<span class="b">${elem}</span>`
    }
})

h3.innerHTML = clutter

gsap.from('h3 .a', {
    y: 50,
    duration: 0.5,
    stagger: 0.1,
    opacity: 0
})
gsap.from('h3 .b', {
    y: 50,
    duration: 0.5,
    stagger: -0.1,
    opacity: 0
})
