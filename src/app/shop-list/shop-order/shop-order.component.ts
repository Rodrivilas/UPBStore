import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shop-order',
  templateUrl: './shop-order.component.html',
  styleUrls: ['./shop-order.component.css']
})
export class ShopOrderComponent {
  @Output() public ordenarNombreEvent= new EventEmitter();
  @Output() public ordenarPrecioEvent= new EventEmitter();
  @Output() public ordenarCantidadEvent= new EventEmitter();
  @Output() public ordenarTipoEvent= new EventEmitter();



  ordenarNombre(){
    this.ordenarNombreEvent.emit('ordenarNombre');
  }

  ordenarPrecio(){
    this.ordenarPrecioEvent.emit('ordenarNombre');
  }
  ordenarCantidad(){
    this.ordenarCantidadEvent.emit('ordenarNombre');
  }
  ordenarTipo(){
    this.ordenarTipoEvent.emit('ordenarNombre');
  }
}
