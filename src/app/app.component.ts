import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  title1 = 'Todo List';
  title2 = 'Currency Converter';
  inr=0;
  usd=0;

  list:any[]=[];
  addItem(item:string){
    this.list.push({id:this.list.length,name:item});
  }
  removeItem(id:number){
    this.list = this.list.filter(item=>item.id!==id)
  }

  changeToInr(e:any)
{
  this.inr=e.target.value*74.46;
}

  changeToUsd(e:any)
{
  this.usd=e.target.value/74.46;
}

}
