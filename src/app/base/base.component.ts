import { Component,  OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base',
  template: `
    <p>
      base works!
    </p>
  `,
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnDestroy {

  destroy$ = new Subject();


  ngOnDestroy() {
    // this.destroy$.next(undefined);
    this.destroy$.complete();
  }


}
