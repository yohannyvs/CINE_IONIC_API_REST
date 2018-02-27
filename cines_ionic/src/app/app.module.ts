import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InicioPage } from '../pages/inicio/inicio';
import { PeliculasPage } from '../pages/peliculas/peliculas';
import { AsientosPage } from '../pages/asientos/asientos';
import { PagoPage } from '../pages/pago/pago';
import { FacturaPage } from '../pages/factura/factura';

//servicios
import { LoginService } from './services/login.service';
import { PeliculasService } from './services/peliculas.service';
import { MantenimientosService } from './services/mantenimientos.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InicioPage,
    PeliculasPage,
    AsientosPage,
    PagoPage,
    FacturaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InicioPage,
    PeliculasPage,
    AsientosPage,
    PagoPage,
    FacturaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    PeliculasService,
    MantenimientosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
