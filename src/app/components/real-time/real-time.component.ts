import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { EquipmentDataService } from './../../services/equipment-data.service';
import { EquipmentService } from './../../services/equipment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-real-time',
  templateUrl: './real-time.component.html',
  styleUrls: ['./real-time.component.css'],
})
export class RealTimeComponent implements OnInit {
  onPowers = 0;
  equipments;
  equipmentsData;
  inputsData;
  potencia;

  constructor(private equipmentService: EquipmentService) {}

  updatePower() {
    this.onPowers = this.equipmentsData.reduce((onPowers, item) => {
      if (item.onOff) {
        return onPowers + parseInt(item.power);
      } else return onPowers;
    }, 0);
  }

  ngOnInit(): void {
    this.equipments = this.equipmentService.getAll();
    this.equipments.subscribe((res) => {
      console.log(res);
      this.equipmentsData = res;
      this.onPowers = 0;
      this.updatePower();
    });
  }
}
