import { keyframes, animate, transition, style } from '@angular/animations';

export const Transitions = {
  screen1UpQ() {
    return transition('* => slideUptoQue', [
      animate(
        '300ms',
        keyframes([
          // set up to qued up postion
          style({ left: '35px', bottom: '-500px', offset: 0 }),
          // tells ng how much time the elment should take getting to display postion
          style({ left: '35px', bottom: '0px', offset: 1 }),
        ])
      ),
    ]);
  },

  screen1UpD() {
    return transition('* => slideUptoDisplay', [
      animate(
        '300ms',
        keyframes([
          // end up at the qued in postion
          style({ left: '35px', bottom: '500px', offset: 1 }),
        ])
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
          // screen1 qued-in postion { left: 35px, top 500px}
          // end up at the qued in postion
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
          // screen2 qued-up postion { left: 35px, bottom: -50px}
          style({ left: '35px', bottom: '-50px', offset: 0 }),
          // timely move to display postion
          style({ left: '35px', bottom: '460px', offset: 1 }),
        ])
      ),
    ]);
  },

  screen2UpQ() {
    return transition('* => slideUptoQue', [
      animate(
        '300ms',
        keyframes([
          // screen2 qued-in postion { left: 35px, buttom: -50px}
          // end up at the qued in postion
          style({ left: '35px', bottom: '960px', offset: 1 }),
          // style({ left: '750px', bottom: '460px', offset: 0.5 }),
        ])
      ),
    ]);
  },

  screen2DownQ() {
    return transition('* => slideDowntoQue', [
      animate(
        '300ms',
        keyframes([
          // screen2 qued-up postion { left: 35px, buttom: 960px}
          // end up at the qued up postion
          // style({ left: '35px', bottosm: '960px', offset: 0 }),
          style({ left: '35px', bottom: '-50px', offset: 1 }),
        ])
      ),
    ]);
  },

  screen2DownD() {
    return transition('* => slideDowntoDisplay', [
      animate(
        '300ms',
        keyframes([
          // screen2 qued-in postion { left: 35px, bottom: -50px}
          // end up at the qued in postion
          style({ left: '35px', bottom: '960px', offset: 0 }),
          style({ left: '35px', bottom: '460px', offset: 1 }),
        ])
      ),
    ]);
  },
};
