import { keyframes, animate, transition, style } from '@angular/animations';

export const focusTransitions = {
  hovered() {
    return transition('* => hovered', [
      animate(
        '100ms',
        keyframes([style({ transform: 'scale(1.1)', offset: 1 })])
      ),
    ]);
  },
  unHovered() {
    return transition('* => unhovered', [
      animate(
        '100ms',
        keyframes([
          style({ transform: 'scale(1.1)', offset: 0 }),
          style({ transform: 'scale(1)', offset: 1 }),
        ])
      ),
    ]);
  },
};
