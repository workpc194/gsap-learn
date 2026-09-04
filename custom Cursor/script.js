const main = document.querySelector('#main')
const cursor = document.querySelector('#cursor')
const imageDiv = document.querySelector('#image')


window.addEventListener('mousemove', (e)=>{
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 1,
        ease: "back.out",
    })
})

imageDiv.addEventListener('mouseenter', ()=>{
    gsap.to(cursor, {
        scale: 4,
        opacity: 0.5,
        duration: 0.8
    })
})

imageDiv.addEventListener('mouseleave', ()=>{
    gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.8
    })
})

window.addEventListener('wheel', (elem)=>{
    if(elem.deltaY > 0){
        gsap.to('.item', {
            transform: 'translateX(-200%)',
            duration: 2,
            repeat: -1,
            ease: 'none'
        })
        gsap.to('.item i', {
            rotate: 180,
        })
    } else{
        gsap.to('.item', {
            transform: 'translateX(0%)',
            duration: 2,
            repeat: -1,
            ease: 'none'
        })
        gsap.to('.item i', {
            rotate: 0,
        })
    }
})