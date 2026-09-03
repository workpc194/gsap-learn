const initialPath = 'M 10 200 Q 500 200 1200 200';
let finalPath = 'M 10 200 Q 500 200 1200 200';

const svg = document.querySelector('svg');

svg.addEventListener('mousemove', (e)=>{
    finalPath = `M 10 200 Q ${e.x} ${e.y} 1200 200`,
    gsap.to('path', {
        attr: {d:finalPath},
    })
})

svg.addEventListener('mouseleave', ()=>{
    gsap.to('path', {
        attr:{d:initialPath},
        duration: 2,
        ease: "elastic.out(0.75,0.1)"
    })
})