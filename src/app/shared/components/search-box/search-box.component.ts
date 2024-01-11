import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  // definimos nuestro debounecer de la siguiente forma
  private debouncer: Subject<string> = new Subject<string>();
  // manejamos la suscripción de manera independiente
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public value: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  // creamos nuestro evento para nuestro debaunce
  @Output()
  public onDebaunce: EventEmitter<string> = new EventEmitter();


  ngOnInit(): void {
    // gracias al subject ahora es un observable, entonces
    // accedemos a .pipe y .suscribe
    this.debouncerSuscription = this.debouncer
      .pipe(
        // con esta linea definimos el tiempo que esperaremos
        // para tomar las palabras del search-box
        debounceTime(1000)
      )
      .subscribe(value => {
        this.onDebaunce.emit(value);
      })
  }

  ngOnDestroy(): void {
    // usamos onDestroy para limpiar suscripcion junto con unsuscribe
    this.debouncerSuscription?.unsubscribe()
  }


  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  //metodo para escuchar cuando un caracter es presionado
  onKeyPress(searchTerm: string): void {
    this.debouncer.next(searchTerm)
  }


}
