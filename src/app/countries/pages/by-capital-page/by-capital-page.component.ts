import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  // inicializamos la propiedad donde guardaremos nuestra respuesta
  public countries: Country[] = [];

  constructor(
    private countriesService: CountriesService,
  ) { }


  searchByCapital(term: string): void {
    // para que funcione debemos poner .suscribe
    this.countriesService.searchCapital(term)
      .subscribe(countries => {
        // asignamos a nuestra propiedad el valor de la respuesta
        this.countries = countries;
      })
  }
}
