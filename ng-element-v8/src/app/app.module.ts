import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Ng8ElementComponent} from './ng8-element/ng8-element.component';
import {createCustomElement} from "@angular/elements";

@NgModule({
    declarations: [
        AppComponent,
        Ng8ElementComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    entryComponents: [Ng8ElementComponent],
})
export class AppModule {
    constructor(private injector: Injector) {
    }

    ngDoBootstrap() {
        const customElement = createCustomElement(Ng8ElementComponent, {injector: this.injector});
        customElements.define('ng8-element-component', customElement);
    }
}
