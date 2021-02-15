import { TimelineMax as Timeline, Power1 } from 'gsap';

const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const content = node.querySelector('.content');
  const contentInner = node.querySelector('.content--inner');

  timeline
    .from(node, 0.3, {
      display: 'none',
      autoAlpha: 0,
      delay,
      ease: Power1.easeIn,
    })
    .from(content, 0.15, { autoAlpha: 0, y: 25, ease: Power1.easeInOut })
    .from(contentInner, 0.15, {
      autoAlpha: 0,
      delay: 0.15,
      ease: Power1.easeIn,
    });

  return timeline;
};

const getHomeTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true, ease: 'Power3.easeInOut' });
  const texts = node.querySelectorAll('span');
  const slider = node.querySelector('.intro__slider');
  const contentInner = node.querySelector('.intro');

  timeline
    .to(texts, {
      y: '0%',
      duration: 1,
      stagger: 0.25,
      delay,
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
    );

  return timeline;
};

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5;
  let timeline;

  if (pathname === '/') timeline = getHomeTimeline(node, delay);
  else timeline = getDefaultTimeline(node, delay);

  window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()));
};

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
};
