import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricComponent {
// tslint:disable-next-line: no-input-rename
  @Input('used') value = 0;
// tslint:disable-next-line: no-input-rename
  @Input('available') max = 100;

// tslint:disable-next-line: use-life-cycle-interface
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
