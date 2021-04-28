import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-consulter',
  templateUrl: './admin-consulter.component.html',
  styleUrls: ['./admin-consulter.component.css']
})
export class AdminConsulterComponent implements OnInit {

  produit:any;
  constructor( ) {
 
  }

  
 
  async ngOnInit(){
    const rep = await fetch("http://127.0.0.1:8000/cons");
    if (rep.ok){
      rep.json().then(data =>{
        this.produit=data;
       
      })}
  }


}
