import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TLAccordionModule } from './../../projects/tl-lib/src/public_api';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, TLAccordionModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
