import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

declare var Test: () => void;
@Component({
  selector: 'app-enfants',
  templateUrl: './enfants.component.html',
  styleUrls: ['./enfants.component.css']
})
export class EnfantsComponent implements OnInit {

  produit:any;
  constructor( ) {
  }
  async ngOnInit(){
    const rep = await fetch("http://127.0.0.1:8000/cons_enf");
    if (rep.ok){
      rep.json().then(data =>{
        this.produit=data;
       
      })}
  }
}
