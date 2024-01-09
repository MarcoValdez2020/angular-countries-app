import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(
    private countriesService: CountriesService,
  ) { }

  searchByName(term: string): void {
    // llamamos nuestro método del servicio countries
    this.countriesService.searchCountry(term)
    // para que funcione debemos poner .suscribe
      .subscribe(countries => {
        // asignamos a nuestra propiedad la respuesta
        this.countries = countries;
      })
  }

}

