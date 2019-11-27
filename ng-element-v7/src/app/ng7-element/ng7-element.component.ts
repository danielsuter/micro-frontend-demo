import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-ng7-element',
    templateUrl: './ng7-element.component.html',
    styleUrls: ['./ng7-element.component.css']
})
export class Ng7ElementComponent implements OnInit {

    @Input() event: Event;

    constructor() {
    }

    ngOnInit() {
    }

}
