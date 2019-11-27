import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Ng7ElementComponent} from './ng7-element/ng7-element.component';
import {createCustomElement} from "@angular/elements";

@NgModule({
    declarations: [
        AppComponent,
        Ng7ElementComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    entryComponents: [Ng7ElementComponent]
})
export class AppModule {
    constructor(private injector: Injector) {
    }

    ngDoBootstrap() {
        const customElement = createCustomElement(Ng7ElementComponent, {injector: this.injector});
        customElements.define('ng7-element-component', customElement);
    }
}
