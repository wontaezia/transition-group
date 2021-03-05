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

export const play = (pathname, location, search, node, appears, isPlayedOnce, setIsPlayedOnce) => {
    const delay = appears ? 1.9 : 0.6;
    let timeline;

    if (!isPlayedOnce) {
        getIntroTimeline(node, setIsPlayedOnce);
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
        // case '/portfolio': {
        //     timeline = getPortfolioTimeline(node, delay);
        //     break;
        // }
        default: {
            // dynamic routing
            if (pathname.includes('/portfolio/')) {
                timeline = getDetailTimeline(node, delay);
                break;
            }
            if (pathname === '/portfolio') {
                if (!search) {
                    console.log('g');
                    timeline = getPortfolioTimeline(node, delay);
                    break;
                }
            }
            timeline = getDefaultTimeline(node, delay);
            break;
        }
    }

    console.log(search, pathname, location, search === true);

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
