import { CabinetService } from './../../services/cabinet.service';
import { Component, Input, OnInit } from '@angular/core';
import { Cabinet } from 'src/app/models/cabinet.model';
import { DimensionsService } from 'src/app/services/dimensions.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-wall',
	templateUrl: './wall.component.html',
	styleUrls: ['./wall.component.less'],
})
export class WallComponent implements OnInit {
	@Input() width: number = 450;
	@Input() height: number = 270;

	mainCabinets: Cabinet[] = [];
	upperCabinets: Cabinet[] = [];

	border: number = 1;

	constructor(private _ds: DimensionsService, private _cs: CabinetService) {}

	ngOnInit(): void {
		this._setNumberOfCabinetsInRow();
	}

	getScaledDim(dim: number): number {
		return this._ds.getScaledDim(dim) + 2 * this.border;
	}

	private _setNumberOfCabinetsInRow(): void {
		this.mainCabinets = this._cs.mainCabinets;
		this.upperCabinets = this._cs.mainCabinets;
	}

	drop(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.mainCabinets, event.previousIndex, event.currentIndex);
	}
}
