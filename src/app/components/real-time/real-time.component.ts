import { Observable } from 'rxjs';
import { EquipmentDataService } from './../../services/equipment-data.service';
import { EquipmentService } from './../../services/equipment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-real-time',
  templateUrl: './real-time.component.html',
  styleUrls: ['./real-time.component.css']
})
export class RealTimeComponent implements OnInit {
  
  
  equipments: Observable<any>;

  constructor(private equipmentService:EquipmentService) { }

  ngOnInit(): void {
 
    this.equipments = this.equipmentService.getAll();
  }

  

}

