import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeadearComponent } from './headear/headear.component';
import { HomeComponent } from './home/home.component';
import { HommeComponent } from './homme/homme.component';
import { FemmeComponent } from './femme/femme.component';
import { AccesoiresComponent } from './accesoires/accesoires.component';
import { EnfantsComponent } from './enfants/enfants.component';
import { FootorComponent } from './footor/footor.component';
import { AdminAjouterComponent } from './admin-ajouter/admin-ajouter.component';
import { AdminSupprimerComponent } from './admin-supprimer/admin-supprimer.component';
import { AdminModifierComponent } from './admin-modifier/admin-modifier.component';
import { AdminConsulterComponent } from './admin-consulter/admin-consulter.component';
import { AdminEspaceComponent } from './admin-espace/admin-espace.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { InscritComponent } from './inscrit/inscrit.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NavaccComponent } from './navacc/navacc.component';
import { MenuComponent } from './menu/menu.component';

import { HttpClientModule } from '@angular/common/http';
import { DescComponent } from './desc/desc.component';
import { PanierComponent } from './panier/panier.component';

const appRoutes: Routes = [
  {path :'headear', component: HeadearComponent},
  {path :'home', component:HomeComponent},
  {path: 'homme', component:HommeComponent},
  {path:'femme', component:FemmeComponent},
  {path:'accesoires' , component:AccesoiresComponent},
  {path :'enfants' , component:EnfantsComponent},
  {path:"ajouter", component:AdminAjouterComponent},
  {path:"supprimer", component:AdminSupprimerComponent},
  {path:"modifier", component:AdminModifierComponent},
  {path:"consulter", component:AdminConsulterComponent},
  {  path:"espace",component:AdminEspaceComponent},
  {path:"auth", component:AdminAuthComponent},
  {path:"mon-compte", component:MonCompteComponent},
  {path:"inscrit", component:InscritComponent},
  {path:"connexion", component:ConnexionComponent},
{path:"panier", component:PanierComponent},
  {path:"",component:MenuComponent},
 

];

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    HeadearComponent,
    HomeComponent,
    HommeComponent,
    FemmeComponent,
    AccesoiresComponent,
    EnfantsComponent,
    FootorComponent,
    AdminAjouterComponent,
    AdminSupprimerComponent,
    AdminModifierComponent,
    AdminConsulterComponent,
    AdminEspaceComponent,
    AdminAuthComponent,
    MonCompteComponent,
    InscritComponent,
    ConnexionComponent,
    NavaccComponent,
    MenuComponent,
    
    DescComponent,
    PanierComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }