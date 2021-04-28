import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {
  dbuser:any;
ref=localStorage.getItem("mailc");
client:any;
  constructor( private router: Router) {
  }
  async ngOnInit(){
    const rep = await fetch("http://127.0.0.1:8000/cons_profil");
    if (rep.ok){
      rep.json().then(data =>{
        console.log(data)
        this.dbuser=data
        for (let i = 0; i < this.dbuser.length; i++) {
          if (this.ref == this.dbuser[i].mail) {
          this.client=this.dbuser[i];
           }}
      })}
}
async changer_adr()
{
  var adr=(<HTMLInputElement>document.getElementById("adr")).value
  var mail =localStorage.getItem("mailc")
  var body=`{"adr":"${adr}" ,"mail":"${mail}"}`
  console.log(body)
  const rep =await fetch("http://127.0.0.1:8000/modif_adr" ,
  { method:"POST",
     body:body})

  if (rep.ok)
  {  rep.json().then((data)=>{
           console.log(data)
          this.router.navigate(['/home']);
  
  })
}}

async changer_mdp()
{
  var mdp1=(<HTMLInputElement>document.getElementById("mdp1")).value
  var mdp2=(<HTMLInputElement>document.getElementById("mdp2")).value
  var mail =localStorage.getItem("mailc")
  var body=`{"mdp1":"${mdp1}" ,"mail":"${mail}","mdp2":"${mdp2}" }`
  console.log(body)
  const rep =await fetch("http://127.0.0.1:8000/modif_mdp" ,
  { method:"POST",
     body:body})

  if (rep.ok)
  {  rep.json().then((data)=>{
           console.log(data)
    
  })
}
}


}


