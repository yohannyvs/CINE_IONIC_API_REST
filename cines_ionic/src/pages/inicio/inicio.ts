import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { PeliculasPage } from '../peliculas/peliculas';
import { LoginService } from '../../app/services/login.service';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  user:string;
  pass:string;

  constructor(private navCtrl: NavController, private _loginService:LoginService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  otraPagina()
  {
    this._loginService.login(this.user, this.pass).subscribe();
    if(this._loginService.rs == 1)
    {
      this.navCtrl.push(PeliculasPage);
    }
  }

}
