import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricComponent {
// tslint:disable-next-line: no-inferrable-types
  private _value: number = 0;
// tslint:disable-next-line: no-inferrable-types
  private _max: number = 100;

  @Input('used') value: number = 0;
 

  get value(): number {
    return this._value;
  }

  @Input('available')
  set max(max: number) {
    if (isNaN(max)) {
      max = 100;
    }
    this._max = max;
  }

  get max(): number {
    return this._max;
  }

  isDanger() {
    return this.value / this.max > 0.7;
  }
}
