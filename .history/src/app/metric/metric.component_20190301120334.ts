import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricComponent {
  @Input('used') value: number = 0;
  @Input('available')_max: number = 100;

  get max(): number {
    return this._max;
  }

  isDanger() {
    return this.value / this.max > 0.7;
  }
}
