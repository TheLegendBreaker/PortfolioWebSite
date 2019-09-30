import {
  keyframes,
  animate,
  transition,
  style,
  AnimationTransitionMetadata,
} from '@angular/animations';

export const Transitions = {
  leftToQue(): AnimationTransitionMetadata {
    return transition('* => LeftToQue', [
      animate(
        '500ms',
        keyframes([
          style({ opacity: 1, offset: 0 }),
          style({ opacity: 0, offset: 1 }),
        ])
      ),
    ]);
  },
  leftToDisplay(): AnimationTransitionMetadata {
    return transition('* => LeftToDisplay', [
      animate(
        '500ms',
        keyframes([
          style({
            opacity: 0,
            bottom: '310px',
            offset: 0,
          }),
          style({ opacity: 1, offset: 1 }),
        ])
      ),
    ]);
  },
  rightToQue(): AnimationTransitionMetadata {
    return transition('* => RightToQue', [
      animate(
        '500ms',
        keyframes([
          style({ opacity: 1, offset: 0 }),
          style({ opacity: 0, offset: 1 }),
        ])
      ),
    ]);
  },
  rightToDisplay(): AnimationTransitionMetadata {
    return transition('* => RightToDisplay', [
      animate(
        '500ms',
        keyframes([
          style({
            opacity: 0,
            bottom: '310px',
            offset: 0,
          }),
          style({ opacity: 1, offset: 1 }),
        ])
      ),
    ]);
  },
};
