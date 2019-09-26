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
        keyframes([style({ left: '-1150px', bottom: '1060px', offset: 1 })])
      ),
    ]);
  },
  leftToDisplay(): AnimationTransitionMetadata {
    return transition('* => LeftToDisplay', [
      animate(
        '500ms',
        keyframes([
          style({ left: '1180px', bottom: '1060px', offset: 0 }),
          style({ left: '10px', bottom: '1060px', offset: 1 }),
        ])
      ),
    ]);
  },
  rightToQue(): AnimationTransitionMetadata {
    return transition('* => RightToQue', [
      animate(
        '500ms',
        keyframes([style({ left: '1180px', bottom: '1060px', offset: 1 })])
      ),
    ]);
  },
  rightToDisplay(): AnimationTransitionMetadata {
    return transition('* => RightToDisplay', [
      animate(
        '500ms',
        keyframes([
          style({ left: '-1150px', bottom: '1060px', offset: 0 }),
          style({ left: '10px', bottom: '1060px', offset: 1 }),
        ])
      ),
    ]);
  },
};
