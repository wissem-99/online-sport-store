import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dbuser } from '../model/dbuser.model';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
user = new dbuser();
loginErr = 'Invalid email ou  password.';
loginn=true;
  constructor(   private router: Router) {
    
   }
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
    
  
    for (let i = 0; i < this.dbuser.length; i++) {
      if(this.user.mail == this.dbuser[i].mail && this.user.mdp == this.dbuser[i].mdp){
        console.log("successfull")
        this.loginn = true;
        localStorage.setItem("isloggedIn","true");
        
         this.ref=this.user.mail;
        localStorage.setItem("mailc",this.ref)
        this.router.navigate(["/home"])
}    
      else if(this.user.mail != this.dbuser[i].mail && this.user.mdp!= this.dbuser[i].mdp) {
        this.loginn = false;


      }}}}
