import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import Item  from 'src/app/models/item.model';
import { ItemsService } from '../services/items.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  @Output() public editItem= new EventEmitter();
  items: Item[];

  constructor(private itemsService: ItemsService, private router: Router,){
    this.items = [{
      nombre: 'Rotis UPB',
      descripcion: 'Es un hoodie muy comodo, primitivo pero muy bonito',
      imagen: 'https://raw.githubusercontent.com/Rodrivilas/Photos/main/rotis.jpeg',
      precio: 4,
      cantidad: 3,
      color: 'string',
      tipo: 'Rotis'
    }];
    
  }
  ngOnInit(): void {
      this.itemsService.getItems().subscribe(items => {
        this.items = items;
      })
  }
  async itemEdit(item:Item){
    this.editItem.emit(item);
    const response = await this.itemsService.deleteItem(item);
    console.log(response);
    this.router.navigate(['/shop-edit']);

  }
  async onClickDelete(item: Item) {
    const response = await this.itemsService.deleteItem(item);
    console.log(response);
  }
  ordenarNombre(){
    this.items=this.items.sort((a,b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0))
  }

  ordenarTipo(){
    this.items=this.items.sort((a,b) => (a.tipo > b.tipo) ? 1 : ((b.tipo > a.tipo) ? -1 : 0))
  }

  ordenarCantidad(){
    this.items=this.items.sort((a,b) => b.cantidad - a.cantidad)
  }
  ordenarPrecio(){
    this.items=this.items.sort((a,b) => a.precio - b.precio)
  }
}
