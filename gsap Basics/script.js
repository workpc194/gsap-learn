const tl = gsap.timeline()

tl.from('h2', {
    y: 20,
    duration: 1,
    opacity: 0
})

tl.from('h4', {
    y: 20,
    duration: 0.7,
    opacity: 0,
    stagger: 0.5
})

tl.from('body h1',{
    duration: 1,
    scale: 0.1,
    opacity: 0
})