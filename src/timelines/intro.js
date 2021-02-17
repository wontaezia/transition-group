import gsap from 'gsap';

export const getIntroTimeline = (node, setPlayOnce) => {
    const headerContents = document.querySelectorAll('header h1, header li');
    const introTexts = document.querySelectorAll('.intro span');
    const slider = document.querySelector('.intro__slider');
    const contentInner = document.querySelector('.intro');
    const tl = gsap.timeline({
        defaults: { ease: 'Power3.easeInOut' },
    });

    tl.set(headerContents, {
        y: -40,
        opacity: 0,
        duration: 0.6,
        delay: 0,
    })
        .to(node, {
            opacity: 1,
            duration: 0.3,
        })
        .to(introTexts, {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'Power2.easeOut',
        })
        .to(slider, {
            y: '-100%',
            duration: 1.2,
            delay: 0.2,
        })
        .addLabel('slider')
        .to(
            contentInner,
            {
                y: '-100%',
                duration: 0.6,
            },
            'slider-=0.75'
        )
        .addLabel('cover')
        .to(
            headerContents,
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: 'Power2.easeOut',
                onComplete: () => setPlayOnce(true),
            },
            'cover-=0.3'
        );

    return tl;
};
