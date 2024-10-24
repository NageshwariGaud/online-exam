import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: ` {{age}} `,
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input()
  age:number=0;

}
