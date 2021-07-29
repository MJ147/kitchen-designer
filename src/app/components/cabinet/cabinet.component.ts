import { DimensionsService } from './../../services/dimensions.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-cabinet',
	templateUrl: './cabinet.component.html',
	styleUrls: ['./cabinet.component.less'],
})
export class CabinetComponent implements OnInit {
	@Input() width: number = 60;
	@Input() height: number = 72;

	constructor(private _ds: DimensionsService) {}

	ngOnInit(): void {}

	getScaledDim(dim: number): number {
		return this._ds.getScaledDim(dim);
	}
}
