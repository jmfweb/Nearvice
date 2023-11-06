import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { OFormComponent } from "ontimize-web-ngx";

@Component({
	selector: "agreements-detail",
	templateUrl: "./agreements-detail.component.html",
	styleUrls: ["./agreements-detail.component.scss"],
})
export class AgreementsDetailComponent implements OnInit {
	@Input() isClient: boolean;
	@ViewChild("agreementForm", { static: false }) form: OFormComponent;
	status: string;
	constructor() {}

	ngOnInit() {}

	imClient(event) {
		if (event.AG_ACCEPTED) {
			this.status = "ACCEPTED";
		} else if (event.AG_ACCEPTED == false) {
			this.status = "DECLINED";
		} else if (event.AG_ACCEPTED == undefined) {
			this.status = "PENDING";
		}
	}
}
