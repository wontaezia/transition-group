import gsap from 'gsap';

export const getContactTimeline = (node, delay) => {
    const tl = gsap.timeline({ paused: true });
    const circles = node.querySelectorAll('.circle');
    const contents = node.querySelectorAll('div, input, textarea, button');

    tl.from(node, {
        display: 'none',
        autoAlpha: 0,
        duration: 0.3,
        ease: 'Power1.easeIn',
        delay,
    })
        .addLabel('start')
        .to(
            circles,
            {
                y: 0,
                opacity: 0.8,
                stagger: 0.15,
                duration: 1.2,
                ease: 'back.out',
            },
            'start-=0.2'
        )
        .addLabel('circles')
        .to(
            contents,
            {
                y: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 1,
                ease: 'Power3.easeOut',
            },
            'circles-=0.8'
        );

    return tl;
};
