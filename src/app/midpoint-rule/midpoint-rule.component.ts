import { Component, OnInit } from '@angular/core';
import * as math from 'mathjs';

@Component({
  selector: 'app-midpoint-rule',
  templateUrl: './midpoint-rule.component.html',
  styleUrls: ['./midpoint-rule.component.css']
})
export class MidpointRuleComponent implements OnInit {

  constructor() { }
  name = 'The Midpoint Rule';
  definition : boolean = true;
  calculation : boolean = false;
  def_but : HTMLButtonElement;
  cal_but : HTMLButtonElement;
  equation : string ="";
  inputFunction : string = 'x';
  fun : string;
  fun_1 : string;
  lowerLimit : number = 1;
  upperLimit : number = 2;
  noOfIntervals : number = 5;
  deltaX : number;
  deltaXinLat : string;
  sum : number;
  tableRow :{
    interval : string,
    m_i : number,
    f_m_i : number,
    product : number
  }[] = [];
  finalEquInLat : string;

  ngOnInit(): void {
    this.def_but = document.getElementsByTagName('button')[0];
    this.cal_but = document.getElementsByTagName('button')[1];
    this.def_but.classList.add('active');
    this.equation = '$\\lim_{n\\to\\infty}M_{n}=\\int_{a}^{b}f(x)~dx$';
    this.fun = '$f(x)$';
    this.fun_1 = '$m_i$';
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
  click(){
    let check : boolean = true;
    let limitCheck : boolean = false;
    try{
      let x = math.parse(this.inputFunction).evaluate({'x':10});
    }
    catch{
      check = false;
      // alert("Function is not valid");
    }
    limitCheck = (this.lowerLimit < this.upperLimit);
    let final_check = check && limitCheck && this.noOfIntervals;
    if(final_check){
      this.sum = 0;
      this.tableRow = [];
      let f =  math.parse(this.inputFunction);
      this.deltaX = (this.upperLimit-this.lowerLimit)/this.noOfIntervals;
      this.deltaXinLat = '$' + this.deltaX + '$';
      console.log(this.deltaX);
      let i = this.lowerLimit;
      while(i < this.upperLimit){
        let x = Number((i + this.deltaX).toFixed(5));
        let m_i = Number(((i+x)/2).toFixed(5));
        let int = '$[' + i + ',' + x + ']$';
        let val = Number(f.evaluate({'x':m_i}).toFixed(5));
        let pro = Number((val*this.deltaX).toFixed(5));
        i = Number((i + this.deltaX).toFixed(5));
        this.sum += pro;
        this.tableRow.push({
          interval : int,
          m_i : m_i,
          f_m_i : val,
          product : pro
        });
        if(this.tableRow.length>100){
          this.tableRow = [];
          alert("n can't be greater than 100");
          break;
        }
      }
      this.sum = Number(this.sum.toFixed(5));
      this.finalEquInLat = '$\\int_' + this.lowerLimit + '^' + this.upperLimit + f.toTex()+'dx~\\approx~\\sum_{i=1}^{n} f(m_{i})\\cdot\\Delta x=' + this.sum +'$';
      // console.log(this.tableRow);
      // console.log(this.sum.toFixed(5));
    }
    else{
      alert("Kindly enter valid inputs");
    }
  }

}
