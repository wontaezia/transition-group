import gsap from 'gsap';

export const getPortfolioTimeline = (node, delay) => {
    const tl = gsap.timeline({ paused: true });
    const title = node.querySelector('.section__title');

    tl.from(node, {
        display: 'none',
        autoAlpha: 0,
        duration: 0.1,
        ease: 'Power1.easeIn',
        delay,
    })
        .addLabel('start')
        .to(
            title,
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.13,
                ease: 'Power2.easeOut',
            },
            'start-=0.1'
        );

    return tl;
};
