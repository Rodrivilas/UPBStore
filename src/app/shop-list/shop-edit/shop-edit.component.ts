import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ItemsService } from 'src/app/services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.css']
})
export class ShopEditComponent {
  
  formulario: FormGroup;

  constructor(
    private itemsService: ItemsService,
    private router: Router,
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      descripcion: new FormControl(),
      imagen: new FormControl(),
      precio: new FormControl(),
      cantidad: new FormControl(),
      color: new FormControl(),
      tipo: new FormControl()
    });
  }
  async onSubmit() {
    console.log(this.formulario.value)
    const respuesta = await this.itemsService.addItem(this.formulario.value);
    console.log(respuesta);
    this.router.navigate(['/shop-list']);
  }
}
