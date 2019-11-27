import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-ng7-element',
    templateUrl: './ng7-element.component.html',
    styleUrls: ['./ng7-element.component.css']
})
export class Ng7ElementComponent implements OnInit {

    @Input() event: string;
    @Output('broadcast') eventEmitter = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    onClick() {
        this.eventEmitter.emit({message: 'hi from NG7'});
    }
}
