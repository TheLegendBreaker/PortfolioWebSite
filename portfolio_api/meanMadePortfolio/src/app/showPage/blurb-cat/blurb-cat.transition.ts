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
          style({ color: '#000000', offset: 0 }),
          style({ color: '#00000000', offset: 1 }),
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
            background: '#00000000',
            color: '#00000000',
            bottom: '310px',
            offset: 0,
          }),
          style({ background: '#80b3ff', color: '#000000', offset: 1 }),
        ])
      ),
    ]);
  },
  rightToQue(): AnimationTransitionMetadata {
    return transition('* => RightToQue', [
      animate(
        '500ms',
        keyframes([
          style({ background: '#80b3ff', color: '#000000', offset: 0 }),
          style({ background: '#00000000', color: '#00000000', offset: 1 }),
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
            background: '#00000000',
            color: '#00000000',
            bottom: '310px',
            offset: 0,
          }),
          style({ background: '#80b3ff', color: '#000000', offset: 1 }),
        ])
      ),
    ]);
  },
};
