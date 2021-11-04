import { Equipment } from './../equipment';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  constructor(private db: AngularFireDatabase) {}

  insert(equipment: Equipment) {
    this.db
      .list('equipments')
      .push(equipment)
      .then((result: any) => {
        console.log(result.key);
      });
  }
  getInputs(): any {
    return this.db
      .list('entradas')
      .snapshotChanges()
      .pipe(
        map((changes) => {
          return changes.map((c) => c.payload.val());
        })
      );
  }

  getAll(): any {
    return this.db
      .list('equipments')
      .snapshotChanges()
      .pipe(
        map((changes) => {
          return changes.map((c) => ({
            key: c.payload.key,
            ...(c.payload.val() as {}),
          }));
        })
      );
  }

  delete(key: string) {
    this.db.object(`equipments/${key}`).remove();
  }
}
