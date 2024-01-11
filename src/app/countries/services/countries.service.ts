import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })

export class CountriesService {

  public cacheStore: CacheStore = {
    byCapital: {
      term: '',
      countries: []
    },
    byCountries: {
      term: '',
      countries: []
    },
    byRegion: {
      region: '',
      countries: []
    }
  }

  constructor(
    private http: HttpClient
  ) {
    //cargamos nuestro localStorage si existe
    //se hace en esta parte del constructor porque es cuando se inicializa el servicio
    this.loadFromLocalStorage()
  }

  private apiUrl: string = 'https://restcountries.com/v3.1/';

  // Método para salvar el objeto en LocalStorage
  private saveToLocalStorage(){
    //localStorage.set item nos permite guardar objetos
    // pero solo en string, entonces parseamos el objeto con stringify
    // y en la funcion setItem pasamos el nombre del objeto, segido de este
    // pero en string.
    localStorage.setItem('cacheStore',JSON.stringify(this.cacheStore));
  }


  // Método para cargar local storage
  private loadFromLocalStorage(){
    // verificamos si existe cacheStore, si no existe la funcion no hace nada
    if(!localStorage.getItem('cacheStore') )return;
    //cargamos la cache con esto y con ! le decimos a typscript que siempre va tener un valor ahi
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
        //delay sirve para dar un retraso de respuesta
        //dejo delay para apreciar el loader
        delay(1000),
      )
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
  }

  /** NO SE REFACTORIZO ESTE MÉTODO POR DOCUMENTACIÓN DE CÓDIGO, PERO IGUAL SE PUEDE REFACTORIZAR
   *  CON LA IMPLEMENTACIÓN DEL MÉTODO 'getCountriesRequest(url:string)'
   */
  // Cuando creamos un observable indicamos el tipo de dato del objeto, en este caso puede regresar 1 o
  // muchos paises, por eso el arreglo, adem[as en nuestra .get es buena practica indicar con <> el tipo de objeto que nos
  // retornará la peticion
  searchCapital(term: string): Observable<Country[]> {
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
        catchError(() => of([])),
        //dejamos delay para mostrar el loader
        delay(1000),
        // almacenamos el resultado en la cacheStorage
        tap(countries => this.cacheStore.byCapital ={term:term,countries:countries}),
        tap(() => this.saveToLocalStorage())
      );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byCountries ={term:term,countries:countries}),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byRegion ={region:region,countries:countries}),
      tap(() => this.saveToLocalStorage())
    );
  }
}
