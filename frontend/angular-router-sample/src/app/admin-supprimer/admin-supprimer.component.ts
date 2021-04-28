import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-supprimer',
  templateUrl: './admin-supprimer.component.html',
  styleUrls: ['./admin-supprimer.component.css']
})
export class AdminSupprimerComponent implements OnInit {

  produit:any;
  constructor(private router: Router) { }

  async ngOnInit(){
    const rep = await fetch("http://127.0.0.1:8000/cons");
    if (rep.ok){
      rep.json().then(data =>{
        this.produit=data;
       
      })}
  }

 
  async supp()
  {
  
    var idp=(<HTMLInputElement>document.getElementById("idp")).value
   
      console.log(idp)
 var body=`{"idp":"${idp}"}`
 console.log(body)
const rep =await fetch("http://127.0.0.1:8000/supp" ,
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
