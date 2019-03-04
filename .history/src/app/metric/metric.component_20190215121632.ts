import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent {
  @Input() title = '';
  @Input() description = '';
  @Input('used') used = 0;
  @Input('available') available = 100;

  isDanger() {
    return this.used / this.available > 0.7;
  }

}
