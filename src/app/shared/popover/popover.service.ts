import { Injectable, Injector } from '@angular/core';
import {
  Overlay,
  ConnectionPositionPair,
  PositionStrategy,
  OverlayConfig,
} from '@angular/cdk/overlay';
import { PortalInjector, ComponentPortal } from '@angular/cdk/portal';
import { PopoverRef, PopoverContent } from './popover-ref';
import { PopoverComponent } from './popover.component';

export type PopoverParams<T> = {
  width?: string | number;
  height?: string | number;
  origin: HTMLElement;
  content: PopoverContent;
  className: string;
  data?: T;
};

@Injectable({
  providedIn: 'root',
})
export class PopoverService {
  constructor(private overlay: Overlay, private injector: Injector) {}
  classes: string = 'popover-backdrop';
  open<T>({
    origin,
    content,
    data,
    width,
    height,
    className,
  }: PopoverParams<T>): PopoverRef<T> {
    //creating the overlay instance
    this.classes = className;
    console.log(this.classes);
    const overlayRef = this.overlay.create(
      this.getOverlayConfig({ origin, width, height })
    );
    const popoverRef = new PopoverRef<T>(overlayRef, content, data);

    const injector = this.createInjector(popoverRef, this.injector);
    overlayRef.attach(new ComponentPortal(PopoverComponent, null, injector));

    return popoverRef;
  }

  private getOverlayConfig({ origin, width, height }): OverlayConfig {
    return new OverlayConfig({
      hasBackdrop: true,
      width,
      height,
      backdropClass: this.classes,
      panelClass: 'popover-panel',
      positionStrategy: this.getOverlayPosition(origin),
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });
  }

  private getOverlayPosition(origin: HTMLElement): PositionStrategy {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(origin)
      .withPositions(this.getPositions())
      .withFlexibleDimensions(false)
      .withPush(true);

    return positionStrategy;
  }

  createInjector(popoverRef: PopoverRef, injector: Injector) {
    const tokens = new WeakMap([[PopoverRef, popoverRef]]);
    return new PortalInjector(injector, tokens);
  }

  private getPositions(): ConnectionPositionPair[] {
    return [
      {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
      },
      {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
      },
    ];
  }
}
