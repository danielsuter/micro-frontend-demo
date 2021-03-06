import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-ng8-element',
    templateUrl: './ng8-element.component.html',
    styleUrls: ['./ng8-element.component.css']
})
export class Ng8ElementComponent implements OnInit {

    @Input() event: string;

    @Output('broadcast') eventEmitter = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    onClick() {
        this.eventEmitter.emit({message: 'hi from NG8'});
    }
}
