import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public nome_usuario:string="Thiago Miranda";

  constructor() { }
 
  publicsomaDoisNumeros(num1:number, num2:number ): void{
    alert(num1 + num2);
  }
  

  ngOnInit() { 
    
    //this.publicsomaDoisNumeros(10, 99);

  }
    
}
