

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