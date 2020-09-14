import { trigger, transition, style, query, animateChild, animate, group } from '@angular/animations';

export const slideToLeft = [
    query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }), { optional: true }),
    query(':leave', style({ transform: 'translateX(0%)' }), { optional: true }),
    query(':enter', style({ transform: 'translateX(100%)' }), { optional: true }),
    group([
        query(':leave', [
            animate('.9s ease-in-out', style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
        query(':enter', [
            animate('.9s ease-in-out', style({ transform: 'translateX(0%)' })),
        ], { optional: true })
    ])
];
export const slideToRight = [
    query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }), { optional: true }),
    query(':leave', style({ transform: 'translateX(0%)' }), { optional: true }),
    query(':enter', style({ transform: 'translateX(-100%)' }), { optional: true }),
    group([
        query(':leave', [
            animate('.9s ease-in-out', style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
        query(':enter', [
            animate('.9s ease-in-out', style({ transform: 'translateX(0%)' })),
        ], { optional: true })
    ])
];

export const slideToTop = [
    query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }), { optional: true }),
    query(':leave', style({ transform: 'translateY(0%)' }), { optional: true }),
    query(':enter', style({ transform: 'translateY(100%)' }), { optional: true }),
    group([
        query(':leave', [
            animate('.9s ease-in-out', style({ transform: 'translateY(-100%)' })),
        ], { optional: true }),
        query(':enter', [
            animate('.9s ease-in-out', style({ transform: 'translateY(0%)' })),
        ], { optional: true })
    ])
];

export const slideToBottom = [
    query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'whitesmoke' }), { optional: true }),
    query(':leave', style({ transform: 'translateY(0%)' }), { optional: true }),
    query(':enter', style({ transform: 'translateY(-100%)' }), { optional: true }),
    group([
        query(':leave', [
            animate('.9s ease-in-out', style({ transform: 'translateY(100%)' })),
        ], { optional: true }),
        query(':enter', [
            animate('.9s ease-in-out', style({ transform: 'translateY(0%)' })),
        ], { optional: true })
    ])
];