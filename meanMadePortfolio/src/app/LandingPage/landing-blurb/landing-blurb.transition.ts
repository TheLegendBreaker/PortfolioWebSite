import { keyframes, animate, transition, style } from '@angular/animations';

export const Transitions = {
  screen1UpQ() {
    return transition('* => UpToQue', [
      animate(
        '300ms',
        keyframes([
          style({ color: '#000000', offset: 0 }),
          style({ color: '#00000000', offset: 1 }),
        ])
      ),
    ]);
  },

  screen1UpD() {
    return transition('* => DownToQue', [
      animate(
        '300ms',
        keyframes([
          style({ color: '#000000', offset: 0 }),
          style({ color: '#00000000', offset: 1 }),
        ])
      ),
    ]);
  },

  screen1DownQ() {
    return transition('* => UpToDisplay', [
      animate(
        '300ms',
        keyframes([
          style({ color: '#00000000', right: '0px', offset: 0 }),
          style({ color: '#000000', offset: 1 }),
        ])
      ),
    ]);
  },

  screen1DownD() {
    return transition('* => DownToDisplay', [
      animate(
        '300ms',
        keyframes([
          style({ color: '#00000000', right: '0px', offset: 0 }),
          style({ color: '#000000', offset: 1 }),
        ])
      ),
    ]);
  },

  screen2UpD() {
    return transition('* => UpToDisplay', [
      animate(
        '300ms',
        keyframes([
          style({ color: '#000000', offset: 0 }),
          style({ color: '#00000000', offset: 1 }),
        ])
      ),
    ]);
  },

  screen2UpQ() {
    return transition('* => DownToDisplay', [
      animate(
        '300ms',
        keyframes([
          style({ color: '#000000', offset: 0 }),
          style({ color: '#00000000', offset: 1 }),
        ])
      ),
    ]);
  },

  screen2DownD() {
    return transition('* => UpToQue', [
      animate(
        '300ms',
        keyframes([
          style({
            color: '#00000000',
            right: '0',
            bottom: '190.5px',
            offset: 0,
          }),
          style({ color: '#000000', offset: 1 }),
        ])
      ),
    ]);
  },

  screen2DownQ() {
    return transition('* => DownToQue', [
      animate(
        '300ms',
        keyframes([
          style({
            color: '#00000000',
            right: '0',
            bottom: '190.5px',
            offset: 0,
          }),
          style({ color: '#000000', offset: 1 }),
        ])
      ),
    ]);
  },
};
