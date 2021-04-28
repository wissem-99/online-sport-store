import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-femme',
  templateUrl: './femme.component.html',
  styleUrls: ['./femme.component.css']
})
export class FemmeComponent implements OnInit {
  produit:any;
  constructor( ) {
  }
  async ngOnInit(){
    const rep = await fetch("http://127.0.0.1:8000/cons_fem");
    if (rep.ok){
      rep.json().then(data =>{
        this.produit=data;
       
      })}
  }
}
