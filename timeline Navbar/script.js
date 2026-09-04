const main = document.querySelector('.nav i');
const close = document.querySelector('#full i');

const tl = gsap.timeline()

tl.to(main, {
    display: 'none'
})
tl.to('#full', {
    right: 0,
    duration: 0.5
})
tl.from('#full h3', {
    opacity: 0,
    x: 200,
    duration:0.5,
    stagger: 0.1
})

tl.pause()

main.addEventListener('click', ()=>{
    tl.play()
})

close.addEventListener('click', ()=>{
    tl.reverse()
})