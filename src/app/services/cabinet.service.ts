import { DimensionsService } from 'src/app/services/dimensions.service';
import { Injectable } from '@angular/core';
import { Cabinet } from '../models/cabinet.model';

@Injectable({
	providedIn: 'root',
})
export class CabinetService {
	constructor(private _ds: DimensionsService) {}

	get mainCabinets(): Cabinet[] {
		const cabinets: Cabinet[] = [];

		for (let i = 0; i < this.numberOfFullCabinetsInRow; i++) {
			let width = this._ds.defaultCabinetWidth;
			const height = this._ds.defaultCabinetHeight;

			if (this.numberOfFullCabinetsInRow < i + 1 && this.widthOfLastCabinetInRow > 0) {
				width = this.widthOfLastCabinetInRow;
			}

			cabinets.push({ width, height });
		}
		console.log(cabinets);

		return cabinets;
	}

	get numberOfFullCabinetsInRow(): number {
		const freeWidth = this._ds.wallWidth - this._ds.fridgeWidth;

		return freeWidth / this._ds.defaultCabinetWidth;
	}

	get widthOfLastCabinetInRow(): number {
		const freeWidth = this._ds.wallWidth - this._ds.fridgeWidth;

		return freeWidth % this._ds.defaultCabinetWidth;
	}
}
