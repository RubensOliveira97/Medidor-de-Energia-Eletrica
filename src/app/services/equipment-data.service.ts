import { Equipment } from './../equipment';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentDataService {

  private equipmentSource = new BehaviorSubject({ equipment: null, key: '' });
  currentEquipment = this.equipmentSource.asObservable();

  constructor() { }

}
