import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class DimensionsService {
	readonly _SCALE = 2;

	wallWidth: number = 450;
	wallHeight: number = 270;

	defaultCabinetWidth: number = 60;
	defaultCabinetHeight: number = 72;

	fridgeWidth: number = 60;
	fridgeHeight: number = this.wallHeight;

	constructor() {}

	getScaledDim(dim: number): number {
		return dim * this._SCALE;
	}
}
