import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { dbuser } from '../model/dbuser.model';
@Component({
  selector: 'app-inscrit',
  templateUrl: './inscrit.component.html',
  styleUrls: ['./inscrit.component.css']
})
export class InscritComponent implements OnInit {
  user = new dbuser();
inscErr = 'email deja utilise.';
test=true;
loginn=true;
  constructor( private router: Router ) { }
  dbuser:any;
  ref:any ;
  async ngOnInit(){

    const rep = await fetch("http://127.0.0.1:8000/verif");
    if (rep.ok){
      rep.json().then(data =>{
        console.log(data)
        this.dbuser =data;
      })}
  
    }



  async login(){
    console.log(" 9bal fi west login ")
    this.verif()
    console.log("fi west login ")
    console.log(this.test)

    if(this.test==true )
    {
    for (let i = 0; i < this.dbuser.length; i++) {

  
      if(this.user.mail == this.dbuser[i].mail){
        console.log("successfull")
        this.loginn = false;
}
      
      else if(this.user.mail != this.dbuser[i].mail) {
  
        this.inscrit()


      }}}}

    async inscrit()
    {
    
      var nom=(<HTMLInputElement>document.getElementById("nom")).value
      var prenom=(<HTMLInputElement>document.getElementById("prenom")).value
     var adr=(<HTMLInputElement>document.getElementById("adr")).value
     var mail=(<HTMLInputElement>document.getElementById("mail")).value
     var mdp=(<HTMLInputElement>document.getElementById("pw")).value
   var body=`{"nom":"${nom}","prenom":"${prenom}", "mail":"${mail}","adr":"${adr}", "mdp":"${mdp}"}`
   console.log(body)
const rep =await fetch("http://127.0.0.1:8000/add" ,
{ method:"POST",
   body:body})

if (rep.ok)
{  rep.json().then((data)=>{
         console.log(data)
         this.router.navigate(['/connexion']);

})
    }
  }

  verif ()  {

    var nom=(<HTMLInputElement>document.getElementById("nom")).value
    var prenom=(<HTMLInputElement>document.getElementById("prenom")).value
   var adr=(<HTMLInputElement>document.getElementById("adr")).value
   var mail=(<HTMLInputElement>document.getElementById("mail")).value
   var mdp=(<HTMLInputElement>document.getElementById("pw")).value
   if ((nom=="") || (prenom=="") || (adr=="") || (mail=="") ||(mdp==""))
     {
     alert("verifier votre champes");
     this.test=false;
     console.log(this.test)
     }
     else
     {
       this.test=true;
     }
  }
  
}
