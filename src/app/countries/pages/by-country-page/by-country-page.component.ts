import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading:boolean = false;
  public intitialValue:string ='';

  constructor(
    private countriesService: CountriesService,
  ) { }

  searchByName(term: string): void {
    this.isLoading=true;
    // llamamos nuestro método del servicio countries
    this.countriesService.searchCountry(term)
    // para que funcione debemos poner .suscribe
      .subscribe(countries => {
        // asignamos a nuestra propiedad la respuesta
        this.countries = countries;
        this.isLoading=false;
      })
  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.intitialValue = this.countriesService.cacheStore.byCountries.term;
  }

}

