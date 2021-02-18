import gsap from 'gsap';

export const getDetailTimeline = (node, delay) => {
    const tl = gsap.timeline({ paused: true });
    const top = node.querySelectorAll('.section__title, .prev-page-button');
    const image = node.querySelectorAll('.image, p');

    tl.from(node, {
        display: 'none',
        autoAlpha: 0,
        duration: 0.1,
        ease: 'Power1.easeIn',
        delay,
    })
        .addLabel('start')
        .to(
            top,
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'Power2.easeOut',
            },
            delay === 0.6 ? 'start-=0.1' : 'start+=0.3'
        )
        .addLabel('top')
        .to(
            image,
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.08,
                ease: 'Power2.easeOut',
            },
            'top-=0.75'
        );

    return tl;
};
