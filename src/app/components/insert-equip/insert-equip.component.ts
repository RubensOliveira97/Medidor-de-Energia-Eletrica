import { Equipment } from './../../equipment';
import { Observable } from 'rxjs';
import { EquipmentDataService } from './../../services/equipment-data.service';
import { EquipmentService } from './../../services/equipment.service';
import { Component, OnInit } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-insert-equip',
  templateUrl: './insert-equip.component.html',
  styleUrls: ['./insert-equip.component.css']
})
export class InsertEquipComponent implements OnInit {
  equipment:Equipment;
  key:string='';
  equipments: Observable<any>;
  ctxl;
  myLineChart
  

  constructor(private equipmentService:EquipmentService, private equipmentDataService:EquipmentDataService) { }

  ngOnInit(): void {
    this.equipment= new Equipment();
    this.equipmentDataService.currentEquipment.subscribe(data => {
      if(data.equipment && data.key){
        this.equipment = new Equipment();
        this.equipment.name = data.equipment.name;
        this.equipment.power = data.equipment.power;
        this.equipment.pin = data.equipment.pin;
        this.key = data.key;
      }
    })
    this.equipments = this.equipmentService.getAll();
  }

  

  delete(key: string) {
    this.equipmentService.delete(key);
    

  }
  
  onSubmit(){
    
    
    this.equipmentService.insert(this.equipment)
    
    this.equipment = new Equipment();
    
  }

}
