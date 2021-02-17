import gsap from 'gsap';

export const getHomeTimeline = (node, delay) => {
    const mainTitle = node.querySelectorAll('.title h2, .title p, .main__title span');
    const lines = node.querySelectorAll('.line span');
    const photo = node.querySelector('.photo');
    const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'Power3.easeInOut' },
    });

    tl.from(node, {
        display: 'none',
        duration: 0.01,
        delay,
    })
        .addLabel('start')
        .set(
            node,
            {
                opacity: 1,
            },
            'start-=0.1'
        )
        .to(photo, {
            y: 0,
            duration: 0.8,
            ease: 'Power1.easeIn',
        })
        .addLabel('photo')
        .to(
            photo,
            {
                opacity: 1,
                duration: 0.8,
                ease: 'Power3.easeInOut',
            },
            'photo-=0.5'
        )
        .addLabel('opacity')
        .to(
            mainTitle,
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: 'Power3.easeOut',
            },
            'opacity-=0.35'
        )
        .addLabel('title')
        .from(
            lines,
            {
                width: 0,
                stagger: 0.04,
                ease: 'Power3.easeOut',
            },
            'title-=0.6'
        );

    return tl;
};
