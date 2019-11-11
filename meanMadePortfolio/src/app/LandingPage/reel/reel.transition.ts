import {
  keyframes,
  animate,
  transition,
  style,
  AnimationTransitionMetadata,
} from '@angular/animations';

export const Transitions = {
  screen1UpQ() {
    return transition('* => slideUptoQue', [
      animate(
        '300ms',
        keyframes([
          style({ left: '35px', bottom: '-500px', offset: 0 }),
          style({ left: '35px', bottom: '0px', offset: 1 }),
        ])
      ),
    ]);
  },

  screen1UpD() {
    return transition('* => slideUptoDisplay', [
      animate(
        '300ms',
        keyframes([style({ left: '35px', bottom: '500px', offset: 1 })])
      ),
    ]);
  },

  screen1DownQ() {
    return transition('* => slideDowntoQue', [
      animate(
        '300ms',
        keyframes([
          style({ left: '35px', bottom: '500px', offset: 0 }),
          style({ left: '35px', bottom: '0', offset: 1 }),
        ])
      ),
    ]);
  },

  screen1DownD() {
    return transition('* => slideDowntoDisplay', [
      animate(
        '300ms',
        keyframes([
          style({ left: '35px', bottom: '0px', offset: 0 }),
          style({ left: '35px', bottom: '-500px', offset: 1 }),
        ])
      ),
    ]);
  },

  screen2UpD() {
    return transition('* => slideUptoDisplay', [
      animate(
        '300ms',
        keyframes([
          style({ left: '35px', bottom: '-50px', offset: 0 }),
          style({ left: '35px', bottom: '460px', offset: 1 }),
        ])
      ),
    ]);
  },

  screen2UpQ() {
    return transition('* => slideUptoQue', [
      animate(
        '300ms',
        keyframes([style({ left: '35px', bottom: '960px', offset: 1 })])
      ),
    ]);
  },

  screen2DownQ() {
    return transition('* => slideDowntoQue', [
      animate(
        '300ms',
        keyframes([style({ left: '35px', bottom: '-50px', offset: 1 })])
      ),
    ]);
  },

  screen2DownD() {
    return transition('* => slideDowntoDisplay', [
      animate(
        '300ms',
        keyframes([
          style({ left: '35px', bottom: '960px', offset: 0 }),
          style({ left: '35px', bottom: '460px', offset: 1 }),
        ])
      ),
    ]);
  },
  introNextQue(): AnimationTransitionMetadata {
    return transition('Displayed => Next', [
      animate(
        '300ms',
        keyframes([
          style({ left: '35px', bottom: '920px', offset: 0 }),
          style({ left: '35px', bottom: '400px', offset: 1 }),
        ])
      ),
    ]);
  },
  introPerviousQue(): AnimationTransitionMetadata {
    return transition('Displayed => Pervious', [
      animate(
        '300ms',
        keyframes([
          style({ left: '35px', bottom: '920px', offset: 0 }),
          style({ left: '35px', bottom: '1420px', offset: 1 }),
        ])
      ),
    ]);
  },
};
