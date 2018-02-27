import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PeliculasService {

  pelicula:any[] = [];

  constructor( private http:Http ) { }

  getpeliculas()
  {
    let urlGetPelicula:string = "http://localhost:53344/Cine_api_rest_spring/pelicula/";

    return this.http.get( urlGetPelicula)
                      .map( res => {
                          console.log(res);
                          this.pelicula = res.json();
                          console.log(this.pelicula)
                      } )
  }
}
