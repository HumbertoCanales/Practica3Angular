import { trigger, state, style, animate, transition } from '@angular/animations';

export let fade = trigger('fade', [
  state('void', style({
    opacity: 0
  })),
  transition(':enter, :leave', [
    animate('1s ease-out', style({ opacity: '1' }))
  ])
])
