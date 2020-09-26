// import the required animation functions from the angular animations module
import { trigger, animate, transition, style, state } from '@angular/animations';

export const fadeInAnimationLogin =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimationLog', [

        // the "in" style determines the "resting" state of the element when it is visible.
        state('in', style({ opacity: 1 })),

        // fade in when created. this could also be written as transition('void => *')
        transition(':enter', [
            style({ opacity: 0 }),
            animate(1000)
        ]),

        // fade out when destroyed. this could also be written as transition('void => *')
        transition(':leave',
            animate(900, style({ opacity: 0 })))
    ]);

export const fadeInAnimationForm =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimationForm', [

        // the "in" style determines the "resting" state of the element when it is visible.
        state('in', style({ opacity: 1 })),

        // fade in when created. this could also be written as transition('void => *')
        transition(':enter', [
            style({ opacity: 0 }),
            animate(1000)
        ]),

        // fade out when destroyed. this could also be written as transition('void => *')
        transition(':leave',
            animate(1000, style({ opacity: 0 })))
    ]);
export const fadeInAnimationHeader =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimationHeader', [

        // the "in" style determines the "resting" state of the element when it is visible.
        state('in', style({ opacity: 1 })),

        // fade in when created. this could also be written as transition('void => *')
        transition(':enter', [
            style({ opacity: 0 }),
            animate(1000)
        ]),

        // fade out when destroyed. this could also be written as transition('void => *')
        transition(':leave',
            animate(1000, style({ opacity: 0 })))
    ]);
export const fadeAnimation = [
    style({ opacity: 0 }),

    // animation and styles at end of transition
    animate('.5s ease-in-out', style({ opacity: 1 }))
];
