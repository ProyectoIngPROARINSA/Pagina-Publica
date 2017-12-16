import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

//services
import { ServiciosService } from './services/servicios.service'
import { contactenosService } from './services/contactenos.service'
import { quienesSomosService } from './services/quienesSomos.service'

import { AppComponent } from './app.component'
import { MaterializeModule } from 'angular2-materialize'
import { MainPageComponent } from './Components/main-page/main-page.component'
import { ServiciosComponent } from './Components/servicios/servicios.component'
import { contactenosComponent } from './Components/contactenos/contactenos.component'
import { quienesSomosComponent } from './Components/quienesSomos/quienesSomos.component'
import { NavbarComponent } from './Components/navbar/navbar.component'
import { FooterComponent } from './Components/footer/footer.component'

const appRoutes: Routes = [
  { path: 'servicios', component: ServiciosComponent },
  { path: 'inicio', component: MainPageComponent },
  { path: 'contactenos', component: contactenosComponent },
  { path: 'quienesSomos', component: quienesSomosComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ServiciosComponent,
    contactenosComponent,
    quienesSomosComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [ServiciosService, contactenosService, quienesSomosService],
  bootstrap: [AppComponent]
})

export class AppModule { }