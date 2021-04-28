import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-modifier',
  templateUrl: './admin-modifier.component.html',
  styleUrls: ['./admin-modifier.component.css']
})
export class AdminModifierComponent implements OnInit {
  produit:any;
  constructor(private router: Router) { }

  async ngOnInit(){
    const rep = await fetch("http://127.0.0.1:8000/cons");
    if (rep.ok){
      rep.json().then(data =>{
        this.produit=data;
       
      })}
  }

  async modif_prix()
  {
  
    var idp=(<HTMLInputElement>document.getElementById("idp")).value
    var prix=(<HTMLInputElement>document.getElementById("prix")).value
 var body=`{"idp":"${idp}" , "prix":"${prix}"}`
 console.log(body)
const rep =await fetch("http://127.0.0.1:8000/modif_prix" ,
{ method:"POST",
 body:body})

if (rep.ok)
{  rep.json().then((data)=>{
       console.log(data)
       this.router.navigate(['/espace']);

})
  }
}
async modif_qt()
  {
  
    var idp=(<HTMLInputElement>document.getElementById("idp")).value
    var qt=(<HTMLInputElement>document.getElementById("qt")).value
   
 var body=`{"idp":"${idp}" , "qt":"${qt}"}`
 console.log(body)
const rep =await fetch("http://127.0.0.1:8000/modif_qt" ,
{ method:"POST",
 body:body})

if (rep.ok)
{  rep.json().then((data)=>{
       console.log(data)
       this.router.navigate(['/espace']);

})
  }
}
}