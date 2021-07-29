import { Component, Input, OnInit } from '@angular/core';
import { DimensionsService } from 'src/app/services/dimensions.service';

@Component({
	selector: 'app-wall',
	templateUrl: './wall.component.html',
	styleUrls: ['./wall.component.less'],
})
export class WallComponent implements OnInit {
	@Input() width: number = 450;
	@Input() height: number = 270;

	border: number = 1;

	constructor(private _ds: DimensionsService) {}

	ngOnInit(): void {}

	getScaledDim(dim: number): number {
		return this._ds.getScaledDim(dim + this.border);
	}
}
