import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accesoires',
  templateUrl: './accesoires.component.html',
  styleUrls: ['./accesoires.component.css']
})
export class AccesoiresComponent implements OnInit {

  produit:any;
  constructor( ) {
  }
  async ngOnInit(){
    const rep = await fetch("http://127.0.0.1:8000/cons_acc");
    if (rep.ok){
      rep.json().then(data =>{
        this.produit=data;
       console.log(this.produit)
      })}
  }
}
