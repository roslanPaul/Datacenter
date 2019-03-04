import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricComponent {
// tslint:disable-next-line: no-input-rename
  @Input('used') value: number = 0;
// tslint:disable-next-line: no-input-rename
  @Input('available')_max: number = 100;

  ngOnChanges(changes) {
// tslint:disable-next-line: curly
    if (changes.value && isNaN(changes.value.currentValue)) this.value = 0;
// tslint:disable-next-line: curly
    if (changes.value && isNaN(changes.max.currentValue)) this.max = 0;
  }
  
  isDanger() {
    return this.value / this.max > 0.7;
  }
}
