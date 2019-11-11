import { keyframes, animate, transition, style } from '@angular/animations';

export const Transitions = {
  screen1LeftQ() {
    return transition('* => LeftToQue', [
      animate(
        '500ms',
        keyframes([
          style({ color: '#000000', offset: 0 }),
          style({ color: '#00000000', offset: 1 }),
        ])
      ),
    ]);
  },
  screen1LeftD() {
    return transition('* => LeftToDisplay', [
      animate(
        '500ms',
        keyframes([
          style({ color: '#00000000', top: '0', offset: 0 }),
          style({ color: '#000000', offset: 1 }),
        ])
      ),
    ]);
  },
  screen1RightQ() {
    return transition('* => RightToQue', [
      animate(
        '500ms',
        keyframes([
          style({ color: '#000000', offset: 0 }),
          style({ color: '#00000000', offset: 1 }),
        ])
      ),
    ]);
  },
  screen1RightD() {
    return transition('* => RightToDisplay', [
      animate(
        '500ms',
        keyframes([
          style({ color: '#00000000', top: '0', offset: 0 }),
          style({ color: '#000000', offset: 1 }),
        ])
      ),
    ]);
  },

  screen2LeftQ() {
    return transition('* => LeftToQue', [
      animate(
        '500ms',
        keyframes([
          style({ color: '#00000000', top: '-155px', offset: 0 }),
          style({ color: '#000000', offset: 1 }),
        ])
      ),
    ]);
  },
  screen2LeftD() {
    return transition('* => LeftToDisplay', [
      animate(
        '500ms',
        keyframes([
          style({ color: '#000000', offset: 0 }),
          style({ color: '#00000000', offset: 1 }),
        ])
      ),
    ]);
  },
  screen2RightQ() {
    return transition('* => RightToQue', [
      animate(
        '500ms',
        keyframes([
          style({ color: '#00000000', top: '-155px', offset: 0 }),
          style({ color: '#000000', offset: 1 }),
        ])
      ),
    ]);
  },
  screen2RightD() {
    return transition('* => RightToDisplay', [
      animate(
        '500ms',
        keyframes([
          style({ color: '#000000', offset: 0 }),
          style({ color: '#00000000', offset: 1 }),
        ])
      ),
    ]);
  },
};
