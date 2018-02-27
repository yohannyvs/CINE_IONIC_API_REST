import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacturaPage } from '../factura/factura';
import { MantenimientosService } from '../../app/services/mantenimientos.service';
import { LoginService } from '../../app/services/login.service';
import { PeliculasPage } from '../peliculas/peliculas';

@IonicPage()
@Component({
  selector: 'page-pago',
  templateUrl: 'pago.html',
})
export class PagoPage {

  fecha:string;
  anno:string;
  mes:string;
  num_tar:number;
  num_seg:string;
  res;

  constructor(private navCtrl: NavController, private navParams: NavParams, private ms:MantenimientosService) { }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad PagoPage');
  }

  pagar()
  {
    //this.mes = (<HTMLInputElement> document.getElementById('mes')).value
    //this.anno = (<HTMLInputElement> document.getElementById('anno')).value
    this.fecha = ""+this.mes+"/"+this.anno+"";
    this.res = this.ms.pagar(this.num_tar, this.fecha, this.num_seg).subscribe();
    console.log( this.fecha + " " + this.num_tar + " " + this.num_seg )
    console.log("res ", this.res);
    if(this.res == 2)
    {
      alert("No Tiene Fondos Suficientes");
    }
    else
    {
      if(this.res == 3)
      {
        alert("Tarjeta no encontrada: Verifique los Datos");
      }
      else
      {
        alert("Pago Exitoso");
        this.navCtrl.push(PeliculasPage);
      }
    }
  }

  otraPagina()
  {
    this.pagar();
    //this.navCtrl.push(FacturaPage);
  }

}
