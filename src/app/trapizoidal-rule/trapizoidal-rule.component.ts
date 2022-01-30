import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trapizoidal-rule',
  templateUrl: './trapizoidal-rule.component.html',
  styleUrls: ['./trapizoidal-rule.component.css']
})
export class TrapizoidalRuleComponent implements OnInit {
  
  name = 'The Trapezoidal Rule';
  definition : boolean = true;
  calculation : boolean = false;
  def_but : HTMLButtonElement;
  cal_but : HTMLButtonElement;

  constructor() { }

  ngOnInit(): void {
    this.def_but = document.getElementsByTagName('button')[0];
    this.cal_but = document.getElementsByTagName('button')[1];
    // this.def_but.classList.add('active');
    (document.getElementById('def') as HTMLButtonElement).classList.add('active');
  }

  def():void{
    this.definition = true;
    this.calculation = false;
    this.def_but.classList.add('active');
    this.cal_but.classList.remove('active');
  }
  cal():void{
    this.definition = false;
    this.calculation = true;
    this.cal_but.classList.add('active');
    this.def_but.classList.remove('active');
  }

}
