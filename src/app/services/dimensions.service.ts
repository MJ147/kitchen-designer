import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class DimensionsService {
	readonly _SCALE = 2;

	constructor() {}

	getScaledDim(dim: number): number {
		return dim * this._SCALE;
	}
}
