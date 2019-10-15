import {
  AnimationTransitionMetadata,
  transition,
  keyframes,
  animate,
  style,
} from '@angular/animations';

export const Transitions = {
  next1(): AnimationTransitionMetadata {
    return transition('next1 => next', [
      animate(
        '250ms',
        keyframes([
          style({ opacity: 1, transform: 'scale(-.9, .9)', offset: 0 }),
          style({ opacity: 1, transform: 'scale(-.9, .9)', offset: 0.9 }),
          style({ opacity: 0, offset: 1 }),
        ])
      ),
    ]);
  },
  next(): AnimationTransitionMetadata {
    return transition('next => next1', [
      animate(
        '250ms',
        keyframes([
          style({ opacity: 1, transform: 'scale(.9)', offset: 0 }),
          style({ opacity: 1, offset: 0.9 }),
          style({ opacity: 0, offset: 1 }),
        ])
      ),
    ]);
  },
};
