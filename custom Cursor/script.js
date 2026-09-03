const main = document.querySelector('#main')
const cursor = document.querySelector('#cursor')
const imageDiv = document.querySelector('#image')


main.addEventListener('mousemove', (e)=>{
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