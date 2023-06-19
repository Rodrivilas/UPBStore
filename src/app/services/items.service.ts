import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, setDoc,updateDoc } from '@angular/fire/firestore';
import  Item  from 'src/app/models/item.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private firestore: Firestore) { }

  addItem(item: Item){
    const itemRef=collection(this.firestore, 'Item');
    return addDoc(itemRef,item);
  }
  getItems(): Observable<Item[]> {
    const itemRef = collection(this.firestore, 'Item');
    return collectionData(itemRef, { idField: 'id' }) as Observable<Item[]>;
  }
  deleteItem(item: Item) {
    const itemDocRef = doc(this.firestore, `Item/${item.id}`);
    return deleteDoc(itemDocRef);
  }

  setItem(item:Item){
    const itemDocRef = doc(this.firestore, `Item/${item.id}`);
    return setDoc(itemDocRef, item);
  }
}
