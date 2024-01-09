import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})

export class CountriesService {
  constructor(
    private http: HttpClient
    ) {  }

    private apiUrl:string= 'https://restcountries.com/v3.1/';


    searchCountryByAlphaCode(code: string):Observable<Country | null>{
      const url = `${this.apiUrl}/alpha/${code}`;
      return this.http.get<Country[]>(url)
      .pipe(
        map(countries=> countries.length > 0 ? countries[0]:null),
        catchError( () =>of(null))
      );
    }

    // Cuando creamos un observable indicamos el tipo de dato del objeto, en este caso puede regresar 1 o
    // muchos paises, por eso el arreglo, adem[as en nuestra .get es buena practica indicar con <> el tipo de objeto que nos
    // retornará la peticion
    searchCapital( term: string): Observable<Country[]>{
      const url = `${this.apiUrl}/capital/${term}`;
      return this.http.get<Country[]>(url)
      .pipe(
        // con esto atrapamos el error, si imprimimos el error se nos muestra
        // en gris en lugar de mandar el error en consola
        /*catchError( error => {
          console.log(error);
          return of([])
        })*/
        // pero todo esto lo resumimos con la siguiente linea:
        // ademas usar () porque no usamos errror
        catchError( () =>of([]))
      );
    }

    searchCountry(term :string):Observable<Country[]>{
      const url = `${this.apiUrl}/name/${term}`;
      return this.http.get<Country[]>(url)
      .pipe(
        catchError( () =>of([]))
      )
    }

    searchRegion(region: string):Observable<Country[]>{
      const url = `${this.apiUrl}/region/${region}`;
      return this.http.get<Country[]>(url)
      .pipe(
        catchError( () =>of([]))
      )
    }
}
