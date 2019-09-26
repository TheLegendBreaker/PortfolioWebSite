import {
  keyframes,
  animate,
  transition,
  style,
  AnimationTransitionMetadata,
} from '@angular/animations';

export const Transitions = {
  screen1LeftQ(): AnimationTransitionMetadata {
    return transition('* => LeftToQue', [
      animate('500ms', keyframes([style({ right: '1170px', offset: 1 })])),
    ]);
  },
  screen1RightQ(): AnimationTransitionMetadata {
    return transition('* => RightToQue', [
      animate('500ms', keyframes([style({ left: '1170px', offset: 1 })])),
    ]);
  },
  screen1LeftD(): AnimationTransitionMetadata {
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
  screen1RightD(): AnimationTransitionMetadata {
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

  screen2LeftD(): AnimationTransitionMetadata {
    return transition('* => LeftToDisplay', [
      animate('500ms', keyframes([style({ right: '1170px', offset: 1 })])),
    ]);
  },
  screen2RightD(): AnimationTransitionMetadata {
    return transition('* => RightToDisplay', [
      animate('500ms', keyframes([style({ left: '1170px', offset: 1 })])),
    ]);
  },
  screen2LeftQ(): AnimationTransitionMetadata {
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
  screen2RightQ(): AnimationTransitionMetadata {
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
