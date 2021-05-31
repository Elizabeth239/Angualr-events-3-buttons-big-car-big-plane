import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <div>
   <button (click)="content='showSubContent'">Атомобиль</button>
   <button (click)="content='showSubContentTwo'">Корабль</button>
   <button (click)="content='showSubContentThree'">Самолет</button>
 </div>
<div [ngSwitch]="content">

 <div *ngSwitchDefault>
   My Main content
  </div> 
<div *ngSwitchCase="'showSubContent'">
	<p>Информация о рисунке 1</p>
   <img src={{pic1}} />
</div>

<div *ngSwitchCase="'showSubContentTwo'">
<p>Информация о рисунке 2</p>
   <img src={{pic2}} />
</div>

<div *ngSwitchCase="'showSubContentThree'">
<p>Информация о рисунке 3</p>
   <img src={{pic3}} />
</div>
</div>
`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

content="showSubContent";

pic1="./assets/images/img1.jpg"
pic2="./assets/images/img2.jpg"
pic3="./assets/images/img3.jpg"







  constructor() { }


  ngOnInit():void{
 
  }

}
