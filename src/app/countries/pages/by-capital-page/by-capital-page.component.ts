import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  // inicializamos la propiedad donde guardaremos nuestra respuesta
  public countries: Country[] = [];
  public isLoading: boolean = false;

  public intitialValue:string ='';

  constructor(
    private countriesService: CountriesService,
  ) { }


  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.intitialValue = this.countriesService.cacheStore.byCapital.term;
  }


  searchByCapital(term: string): void {
    this.isLoading = true;
    // para que funcione debemos poner .suscribe
    this.countriesService.searchCapital(term)
      .subscribe(countries => {
        // asignamos a nuestra propiedad el valor de la respuesta
        this.countries = countries;
        this.isLoading= false;
      })
  }
}
