import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-ajouter',
  templateUrl: './admin-ajouter.component.html',
  styleUrls: ['./admin-ajouter.component.css']
})
export class AdminAjouterComponent implements OnInit {
test=true;
  constructor(private router: Router) { }
  url!: string;
  ngOnInit(): void {
  }
 
  async ajoutp()
  {
  this.verif()
  console.log(this.test)
  if (this.test==true)
  {console.log(this.test)
    var idp=(<HTMLInputElement>document.getElementById("idp")).value
    var libp=(<HTMLInputElement>document.getElementById("libp")).value
   var prix=(<HTMLInputElement>document.getElementById("prix")).value
   var qt=(<HTMLInputElement>document.getElementById("qt")).value
   var cat=(<HTMLInputElement>document.getElementById("cat")).value
    
 var body=`{"idp":"${idp}","libp":"${libp}", "prix":"${prix}","qt":"${qt}", "cat":"${cat}" ,"php":"${this.url}"}`
 console.log(body)
const rep =await fetch("http://127.0.0.1:8000/addp" ,
{ method:"POST",
 body:body})

if (rep.ok)
{  rep.json().then((data)=>{
       console.log(data)
       this.router.navigate(['/espace']);

})
  }
}}
onselectfile(event:any){
  console.log("here");
  if(event.target.files && event.target.files[0]){
    var reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = async data =>{
      this.url = data.target?.result as string;
    }
  }
}

verif()
{
  var idp=(<HTMLInputElement>document.getElementById("idp")).value
    var libp=(<HTMLInputElement>document.getElementById("libp")).value
   if(idp=="" || libp=="")
   {
     alert("completer les champs");
     this.test=false;
     console.log(this.test)
  }
  else
  {
    this.test=true;
  }
}
}

