import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

export const fuzzy = trigger('routeAnimation', [
  transition('next <=> next', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          // width: '100%',
          // height: '100%',
          // left: 0,
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        animate(
          '1000ms',
          keyframes([
            style({
              'background-image': `url('../assets/router_animation/routeTransition.gif')`,
              'background-size': '100%',
              'z-index': 'top',
              opacity: 1,
              transform: 'scale(1) translateY(0)',
              offset: 0,
            }),
            style({
              'background-image': `url('../assets/router_animation/routeTransition.gif')`,
              'background-size': '100%',
              'z-index': 'top',
              opacity: 1,
              transform: 'scale(1) translateY(0)',
              offset: 0.9,
            }),
            style({ 'background-image': 'none', 'z-index': 'auto', offset: 1 }),
          ])
        ),
      ],
      {
        optional: true,
      }
    ),
  ]),
]);
