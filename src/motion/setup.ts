import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onPage, setTransition, ease, prefersReducedMotion } from '../engine';
import { practices } from '../data/site';

export function setupMotion() {
  onPage(() => {
    const figure = document.querySelector<HTMLElement>('[data-pipeline]');
    if (!figure) return;
    const buttons = [...figure.querySelectorAll<HTMLButtonElement>('[data-stage]')];
    const copy = figure.querySelector<HTMLElement>('[data-stage-copy]');
    const line = figure.querySelector<HTMLElement>('[data-pipeline-line]');
    if (line) gsap.set(line, { scaleX: 0 });
    const off: (() => void)[] = [];
    buttons.forEach((button, index) => {
      const select = () => {
        buttons.forEach((b, i) => b.setAttribute('aria-pressed', String(index === i)));
        if (copy) copy.textContent = button.dataset.explanation || '';
        if (line) {
          if (prefersReducedMotion()) gsap.set(line, { scaleX: index / 2 });
          else gsap.to(line, { scaleX: index / 2, duration: .65, ease: ease.out, overwrite: true });
        }
      };
      button.addEventListener('click', select);
      off.push(() => button.removeEventListener('click', select));
    });
    return () => off.forEach(fn => fn());
  });
  setTransition({
    leave: (root) => gsap.timeline().set(root, { autoAlpha: 1 }).fromTo(root.querySelector('.curtain__panel'), { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: .45, ease: ease.inOut }),
    enter: (root) => gsap.timeline().to(root.querySelector('.curtain__panel'), { clipPath: 'inset(0 0 0 100%)', duration: .5, ease: ease.inOut }).set(root, { autoAlpha: 0 }),
  });
  onPage(({ intro }) => {
    if (!prefersReducedMotion()) {
      const heading = document.querySelector('h1');
      if (heading) intro.from(heading, { y: 14, duration: .7, ease: ease.out }, 0);
    }
    const form = document.querySelector<SVGGElement>('[data-signal-form]');
    const root = document.querySelector<HTMLElement>('[data-signal]');
    if (!form || !root) return;
    const buttons = [...document.querySelectorAll<HTMLButtonElement>('[data-practice]')];
    const label = document.querySelector<HTMLElement>('[data-practice-label]');
    const nodeLabels = [...root.querySelectorAll<HTMLElement>('[data-node-label]')];
    const nodes = [...root.querySelectorAll<HTMLElement>('[data-signal-node]')];
    const traceButton = root.querySelector<HTMLButtonElement>('[data-trace]');
    const traceLabel = root.querySelector<HTMLElement>('[data-trace-label]');
    const traceStatus = root.querySelector<HTMLElement>('[data-trace-status]');
    const packet = root.querySelector<SVGCircleElement>('[data-signal-packet]');
    const segments = [...root.querySelectorAll<SVGPathElement>('[data-trace-segment]')];
    const lengths = segments.map(path => path.getTotalLength());
    let selected = 0;
    let traceTween: gsap.core.Tween | undefined;
    let stage = -1;
    const project = document.querySelector<HTMLAnchorElement>('[data-practice-project]');
    const state = { value: 0, pointer: 0, trace: 0 };
    const reduced = prefersReducedMotion();
    const cleanups: (() => void)[] = [];
    const renderTrace = () => {
      const nextStage = state.trace < .46 ? 0 : state.trace < .96 ? 1 : 2;
      if (nextStage !== stage) {
        stage = nextStage;
        nodes.forEach((node, i) => node.dataset.active = String(i === stage));
        if (traceStatus && state.trace > 0) traceStatus.textContent = practices[selected].actions[stage];
      }
      if (packet && segments.length === 2) {
        const segment = state.trace < .5 ? 0 : 1;
        const point = segments[segment].getPointAtLength(lengths[segment] * (segment === 0 ? state.trace * 2 : (state.trace - .5) * 2));
        gsap.set(packet, { x: point.x - 300, y: point.y - 130 });
      }
    };
    const select = (index: number) => {
      if (index < 0 || index >= practices.length) return;
      const practice = practices[index];
      buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
      if (label) label.textContent = practice.label;
      selected = index;
      traceTween?.kill();
      state.trace = 0;
      stage = -1;
      nodeLabels.forEach((node, i) => node.textContent = practice.nodes[i]);
      if (traceLabel) traceLabel.textContent = practice.trace;
      if (traceStatus) traceStatus.textContent = 'Follow the project’s data flow.';
      renderTrace();
      if (project) { project.firstChild!.textContent = practice.project; project.href = practice.href; }
      if (reduced) return;
      gsap.to(state, { value: index, duration: 1.15, ease: ease.out, overwrite: true });
      for (let group = 0; group < 3; group++) {
        gsap.to(form.querySelectorAll(`[data-thread="${group}"]`), { opacity: group === index ? .85 : .23, duration: .7, ease: ease.soft });
      }
    };
    for (const [i, button] of buttons.entries()) {
      const click = () => select(i);
      button.addEventListener('click', click);
      cleanups.push(() => button.removeEventListener('click', click));
    }
    select(0);
    const trace = () => {
      traceTween?.kill();
      state.trace = 0;
      stage = -1;
      if (reduced) { state.trace = 1; renderTrace(); }
      else {
        renderTrace();
        if (traceStatus) traceStatus.textContent = practices[selected].actions[0];
        traceTween = gsap.to(state, { trace: 1, duration: 4.2, ease: 'none', onUpdate: renderTrace });
      }
    };
    traceButton?.addEventListener('click', trace);
    cleanups.push(() => { traceButton?.removeEventListener('click', trace); traceTween?.kill(); });
    if (!reduced) {
      gsap.set(form, { svgOrigin: '300 300' });
      const rotate = gsap.quickSetter(form, 'rotation', 'deg');
      const move = (e: PointerEvent) => {
        const box = root.getBoundingClientRect();
        gsap.to(state, { pointer: ((e.clientX - box.left) / box.width - .5) * 4, duration: 1.2, ease: ease.soft, overwrite: 'auto' });
      };
      const leave = () => { gsap.to(state, { pointer: 0, duration: 1.2, ease: ease.soft, overwrite: 'auto' }); };
      root.addEventListener('pointermove', move);
      root.addEventListener('pointerleave', leave);
      let inView = true;
      let last = 0;
      const tick = (time: number) => {
        if (!inView || document.hidden || time - last < .03) return;
        last = time;
        rotate(-18 + state.value * 29 + Math.sin(time * .22) * 3 + state.pointer);
      };
      const trigger = ScrollTrigger.create({ trigger: root, start: 'top bottom', end: 'bottom top', onToggle: s => { inView = s.isActive; if (traceTween && traceTween.progress() < 1) s.isActive ? traceTween.resume() : traceTween.pause(); } });
      gsap.ticker.add(tick);
      cleanups.push(() => { gsap.ticker.remove(tick); trigger.kill(); root.removeEventListener('pointermove', move); root.removeEventListener('pointerleave', leave); });
    }
    return () => { cleanups.forEach(fn => fn()); gsap.killTweensOf(state); };
  });
}
