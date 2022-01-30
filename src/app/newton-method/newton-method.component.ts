import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as math from 'mathjs';

@Component({
  selector: 'app-newton-method',
  templateUrl: './newton-method.component.html',
  styleUrls: ['./newton-method.component.css']
})
export class NewtonMethodComponent implements OnInit {
  name : string = 'Newton Raphson Method';
  inputFunction : string = 'x^2-5x+6';
  decimalPlaces : number = 6;
  initialGuess : number = -1;
  xArray : number[] = [];
  inputFunctionLatex : string = '';
  DerFunctionLatex : string ='';
  functionArray : number[] = [];
  tableRow : {index:number
                x : number
              f : number
            diff : number | string}[] = [];
  definition : boolean = true;
  calculation :  boolean =  false;
  def_but : HTMLButtonElement;
  cal_but : HTMLButtonElement;

  // clicked :boolean = false;
  equation = "$x_{1}=x_{0}-\\frac{f(x_{0})}{f'(x_{0})}$";
  constructor() {}
  ngOnInit(): void {
    this.click();
    this.def_but = document.getElementsByTagName('button')[0];
    this.cal_but = document.getElementsByTagName('button')[1];
    this.def_but.classList.add('active');
  }
  newtonMethod(xn:number, f : math.MathNode, devf : math.MathNode):number{
    return xn-(f.evaluate({'x':xn})/devf.evaluate({'x':xn}));
  }

  click(){  
    this.xArray = [];
    this.functionArray = []; 
    this. tableRow = []
    
    if(this.inputFunction && this.decimalPlaces){
      // this.clicked = true;
      let z = this.initialGuess || 0;
      let f = math.parse(this.inputFunction);
      this.inputFunctionLatex = '$'+f.toTex()+'$';
      let fDer = math.parse(math.derivative(this.inputFunction,'x').toString());
      this.DerFunctionLatex = '$' + fDer.toTex() + '$';
      let difference = 1;
      this.xArray.push(z);
      let flag = 0;
      while(difference){
        let y = this.newtonMethod(z, f, fDer).toFixed(this.decimalPlaces);
        difference = z - Number(y);
        z = Number(y);
        this.xArray.push(z);
        // Precaution not to fall into infinte loop.
        flag += 1;
        if(flag>100){
          alert('Timeout');
          break;
        }
      }
      
      for(let i=0;i<this.xArray.length;i++){
        if(i===0){
          this.tableRow.push({
            index : i,
            x : this.xArray[i],
            f : f.evaluate({'x':this.xArray[i]}).toFixed(this.decimalPlaces),
            diff : '---'
          });
        }
        else{
          this.tableRow.push({
            index : i,
            x : this.xArray[i],
            f : f.evaluate({'x':this.xArray[i]}).toFixed(this.decimalPlaces),
            diff : math.abs(Number((f.evaluate({'x':this.xArray[i]})-f.evaluate({'x':this.xArray[i-1]})).toFixed(5)))
          });
        }
      }
    }
    else{
      alert('Give valid inputs');
    }
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
