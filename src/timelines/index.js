import gsap from 'gsap';
import { getIntroTimeline } from 'timelines/intro';
import { getHomeTimeline } from 'timelines/home';
import { getContactTimeline } from 'timelines/contact';
import { getAboutTimeline } from 'timelines/about';
import { getPortfolioTimeline } from 'timelines/portfolio';
import { getDetailTimeline } from 'timelines/detail';
const getDefaultTimeline = (node, delay) => {
    const tl = gsap.timeline({ paused: true });

    tl.from(node, {
        display: 'none',
        autoAlpha: 0,
        duration: 0.3,
        delay,
        ease: 'Power1.easeIn',
    });

    return tl;
};

export const play = (pathname, node, appears, playOnce, setPlayOnce) => {
    const delay = appears ? 1.9 : 0.6;
    let timeline;

    if (!playOnce) {
        getIntroTimeline(node, setPlayOnce);
    }

    // page
    switch (pathname) {
        case '/': {
            timeline = getHomeTimeline(node, delay);
            break;
        }
        case '/contact': {
            timeline = getContactTimeline(node, delay);
            break;
        }
        case '/about': {
            timeline = getAboutTimeline(node, delay);
            break;
        }
        case '/portfolio': {
            timeline = getPortfolioTimeline(node, delay);
            break;
        }
        default: {
            // dynamic routing
            if (pathname.includes('/portfolio/')) timeline = getDetailTimeline(node, delay);
            else timeline = getDefaultTimeline(node, delay);
            break;
        }
    }

    window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()));
};

export const exit = (node) => {
    const tl = gsap.timeline({ paused: true });

    tl.to(node, {
        duration: 0.6,
        autoAlpha: 0,
        ease: 'Power3.easeInOut',
        onComplete: () => window.scrollTo(0, 0),
    });
    tl.play();
};
