gsap.from('.box', {
    opacity: 0,
    ease: 'power1.out',
    duration: 8,
    autoAlpha: 1
})
gsap.set('.bottomBoxes', {
    opacity: 0,
    scale: 0.4
})


const xMove = () => {
    const boxElement = document.querySelector('.box');
    gsap.to('.box', {
        x: window.innerWidth - boxElement.offsetWidth,
        repeat: -1,
        duration: 4
    })
}

const scaleBox = () => {
    var t1 = gsap.timeline({ repeat: -1 })
    t1.to('.box', {
        scale: 1.5,
        duration: 1
    })
    t1.to('.box', {
        scale: 0.4,
        duration: 1,
    })
}

const fandein = () => {
    var t2 = gsap.timeline();
    t2.to('.box1', {
        opacity: 1,
        duration: 0.6
    })
    t2.to('.box2', {
        opacity: 1,
        duration: 0.6
    })
    t2.to('.box3', {
        opacity: 1,
        duration: 0.6
    })
    t2.to('.box4', {
        opacity: 1,
        duration: 0.6
    })
    t2.to('.box5', {
        opacity: 1,
        duration: 0.6
    })
    t2.to('.bottomBoxes', {
        scale: 1.2,
        stagger: 0.3
    })

}

const snake = () => {
    var t3 = gsap.timeline();
    t3.to('.box1', {
        y: -100,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
    })
    t3.to('.box2', {
        y: -100,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
    })
    t3.to('.box3', {
        y: -100,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
    })
    t3.to('.box4', {
        y: -100,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
    })
    t3.to('.box5', {
        y: -100,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
    })
}

const rotate = () => {
    gsap.to('.rotatingBox', {
        rotation: 360
    })
    gsap.set('.rotatingBox', {
        rotation: 0
    })
}

const scaleupText = () => {
    gsap.to('.input', {
        scale: 1.5,
    })
}
const scaledownText = () => {
    gsap.to('.input', {
        scale: 1,
    })
}

Draggable.create('.rotatingBox');