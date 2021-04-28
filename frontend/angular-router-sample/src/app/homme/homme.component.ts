import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homme',
  templateUrl: './homme.component.html',
  styleUrls: ['./homme.component.css']
})
export class HommeComponent implements OnInit {
  produit:any;
  constructor( ) {
  }
  async ngOnInit(){
    const rep = await fetch("http://127.0.0.1:8000/cons_hom");
    if (rep.ok){
      rep.json().then(data =>{
        this.produit=data;
       
      })}
  }
}
