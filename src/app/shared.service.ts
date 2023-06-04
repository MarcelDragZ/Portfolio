import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private visibleResponsiveSource = new BehaviorSubject<boolean>(false);
  visibleResponsive$ = this.visibleResponsiveSource.asObservable();

  setVisibleResponsive(newValue: boolean): void {
    this.visibleResponsiveSource.next(newValue);
  }
}
