gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
    ease: 'none',
    markers: true,
})

    timeline
        .fromTo(['#hello', '#im'], {opacity: 0}, {
            opacity: 1,
            x: 20,
            duration: 1.5,
            stagger: 0.7
        })
        .fromTo(['#name', '#surname'], {opacity: 0}, {
            opacity: 1,
            duration: 1.2,
        })
        .fromTo('#brooke-img', {opacity: 0}, {
            opacity: 1,
            duration: 1.2,
            x: -50
        })

gsap.to('#hello', {
    scrollTrigger: {
        trigger: '#hello',
        start: 'top top+=1%',
        end: 'bottom center-=50%',
        pin: true,
        scrub: true
    }
})
gsap.to('#im', {
    scrollTrigger: {
        trigger: '#im',
        start: 'top top+=14%',
        end: 'bottom center-=32%',
        pin: true,
        scrub: true
    }
})
gsap.to('#name', {
    scrollTrigger: {
        trigger: '#name',
        start: 'top top+=27%',
        end: 'bottom center-=43%',
        pin: true,
        scrub: 1
    }
})
gsap.to('#surname', {
    scrollTrigger: {
        trigger:  '#surname',
        start: 'top top+=40%',
        end: 'bottom-=25% center-=23%',
        pin: true,
        scrub: 1
    }
})
gsap.to('#img-1', {
    scale: 0.33,
    scrollTrigger: {
        trigger: '#img-1',
        pin: '.container',
        start: 'top-=50%',
        scrub: 1
    }
})
gsap.to('#img-2', {
    scale: 0.33,
    scrollTrigger: {
        trigger: '#img-2',
        pin: '.container',
        start: 'top-=50%',
        x: 200,
        scrub: 1
    }
})
gsap.to('#img-3', {
    scale: 0.70,
    scrollTrigger: {
        trigger: '#img-3',
        pin: '.container',
        start: 'top-=50%',
        scrub: 1
    }
})
gsap.to('#img-4', {
    scrollTrigger: {
        x: -500,
        trigger: '#img-4',
        pin: '.container',
        start: 'top-=10%',
        scrub: 1
    }
})
    gsap.to('#footer h1', {x: 170, stagger: 0.1, scrollTrigger: {
        trigger: '#footer',
        start: 'top-=50% top+=200%',
        end: 'bottom+=50% center+=25%',
        scrub: 1
    }})