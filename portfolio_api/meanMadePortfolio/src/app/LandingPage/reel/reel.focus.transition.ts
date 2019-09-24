import { keyframes, animate, transition, style } from '@angular/animations';

export const focusTransitions = {
  hovered() {
    return transition('* => hovered', [
      animate(
        '100ms',
        keyframes([
          style({ left: '22.5px', height: '425px', width: '625px', offset: 1 }),
        ])
      ),
    ]);
  },
  unHovered() {
    return transition('* => unhovered', [
      animate(
        '100ms',
        keyframes([
          style({ left: '22.5px', height: '425px', width: '625px', offset: 0 }),
          style({ left: '35px', height: '400px', width: '600px', offset: 1 }),
        ])
      ),
    ]);
  },
};
