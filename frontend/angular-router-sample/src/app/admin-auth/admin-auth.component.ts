import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dbadmin } from '../model/dbadmin.model';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {
  
  admin = new dbadmin();
  loginErr = 'Invalid id  ou  password.';
  loginn=true;

    constructor(   private router: Router) {
     }

     dbadmin: any;
    
   async ngOnInit(){
      const rep = await fetch("http://127.0.0.1:8000/va");
      if (rep.ok){
        rep.json().then(data =>{
          this.dbadmin =data;})}
    }
  
    async login(){
      console.log(this.admin)
      for (let i = 0; i < this.dbadmin.length; i++) {
   
    
        if(this.admin.id == this.dbadmin[i].id && this.admin.mdp == this.dbadmin[i].mdp){
       
          console.log("successfull")
          this.loginn = true;
          localStorage.setItem("islog","true");
          this.router.navigate(["/espace"])
  }
        
        else if(this.admin.id != this.dbadmin[i].id && this.admin.mdp!= this.dbadmin[i].mdp) {
        
          this.loginn = false;
        }}}
}