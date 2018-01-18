import { Component, OnInit } from '@angular/core';
import { Button } from './../button'
@Component({
  selector: 'app-switchboard',
  templateUrl: './switchboard.component.html',
  styleUrls: ['./switchboard.component.css']
})
export class SwitchboardComponent implements OnInit {
  buttons:Array<Button> = [];
  constructor() {
    for (let i = 0; i < 10; i++){
      this.buttons.push(new Button(false))
    }
   }
  onButtonClick(index) {
    if(this.buttons[index].myswitch == false){
      this.buttons[index].myswitch = true;
    }
    else if(this.buttons[index].myswitch == true){
      this.buttons[index].myswitch = false;
    }
  }
  ngOnInit() {
  }

}
