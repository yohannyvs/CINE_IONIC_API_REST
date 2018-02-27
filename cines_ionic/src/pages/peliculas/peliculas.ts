import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AsientosPage } from '../asientos/asientos';
import { PeliculasService } from '../../app/services/peliculas.service';

@IonicPage()
@Component({
  selector: 'page-peliculas',
  templateUrl: 'peliculas.html',
})
export class PeliculasPage {

  constructor(private navCtrl: NavController, private ps:PeliculasService) {
  }

  ionViewDidLoad() {
    this.ps.getpeliculas().subscribe();
    console.log(this.ps.pelicula);
    console.log('ionViewDidLoad PeliculasPage');
  }

  otraPagina(id_presentacion){
    this.navCtrl.push(AsientosPage, { param: id_presentacion } );
  }

}
