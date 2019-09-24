import { keyframes, animate, transition, style } from '@angular/animations';

export const Transitions = {
  screen1LeftQ() {
    return transition('* => LeftToQue', [
      animate('500ms', keyframes([style({ right: '1170px', offset: 1 })])),
    ]);
  },
  screen1RightQ() {
    return transition('* => RightToQue', [
      animate('500ms', keyframes([style({ left: '1170px', offset: 1 })])),
    ]);
  },
  screen1LeftD() {
    return transition('* => LeftToDisplay', [
      animate(
        '500ms',
        keyframes([
          style({ left: '1170px', bottom: '0', offset: 0 }),
          style({ left: '0', offset: 1 }),
        ])
      ),
    ]);
  },
  screen1RightD() {
    return transition('* => RightToDisplay', [
      animate(
        '500ms',
        keyframes([
          style({ right: '1170px', bottom: '0', offset: 0 }),
          style({ right: '0', offset: 1 }),
        ])
      ),
    ]);
  },

  screen2LeftD() {
    return transition('* => LeftToDisplay', [
      animate('500ms', keyframes([style({ right: '1170px', offset: 1 })])),
    ]);
  },
  screen2RightD() {
    return transition('* => RightToDisplay', [
      animate('500ms', keyframes([style({ left: '1170px', offset: 1 })])),
    ]);
  },
  screen2LeftQ() {
    return transition('* => LeftToQue', [
      animate(
        '500ms',
        keyframes([
          style({ left: '1170px', bottom: '530px', offset: 0 }),
          style({ left: '0', bottom: '530px', offset: 1 }),
        ])
      ),
    ]);
  },
  screen2RightQ() {
    return transition('* => RightToQue', [
      animate(
        '500ms',
        keyframes([
          style({ right: '1170px', bottom: '530px', offset: 0 }),
          style({ right: '0', bottom: '530px', offset: 1 }),
        ])
      ),
    ]);
  },
};
