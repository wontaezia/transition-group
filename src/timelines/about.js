import gsap from 'gsap';

export const getAboutTimeline = (node, delay) => {
    const tl = gsap.timeline({ paused: true });
    const title = node.querySelectorAll('.section__title, p');
    const photo = node.querySelector('.photo');

    tl.from(node, {
        display: 'none',
        autoAlpha: 0,
        duration: 0.1,
        ease: 'Power1.easeIn',
        delay,
    })
        .addLabel('start')
        .to(photo, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'Power2.easeInOut',
        })
        .addLabel('photo')
        .to(
            title,
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.13,
                ease: 'Power2.easeOut',
            },
            'photo-=0.35'
        );

    return tl;
};
