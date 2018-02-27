import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MantenimientosService
{
  aciento:number;
  acientos:string [] = [];
  factura:number;
  pago;

  constructor( private http:Http ) { }

  pagar(num_tar:number, fecha:string, num_seg:string)
  {
    let url= "http://localhost:53344/Cine_api_rest_spring/pago?num_fact="+this.factura+"&num_tar="+num_tar+"&fecha="+fecha+"&num_seg="+num_seg+"";
    return this.http.get( url )
                    .map( res => {
                      console.log(res);
                      this.pago = res.json()
                      console.log(this.pago)
                    } )
  }

  compra(id_presentacion, aciento, usuario)
  {
    let url= "http://localhost:53344/Cine_api_rest_spring/compra?admin=0&id_present="+ id_presentacion +"&aciento="+ aciento +"&cedula="+usuario+"";

    return this.http.get( url )
                    .map( res => {
                      this.factura = res.json()
                      console.log("Factura ", this.factura)
                    } )
  }

  acientos_ocupados(presentacion:number)
  {
    let url= "http://localhost:53344/Cine_api_rest_spring/acientos?presentacion="+ presentacion +"";

    return this.http.get( url )
                    .map( res => {
                        console.log(res);
                        this.acientos = res.json();
                        console.log(this.acientos)
                    } )
  }

}
