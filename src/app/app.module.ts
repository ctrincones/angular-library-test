import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TLAccordionModule } from './shared/components/tl-accordion.module';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, TLAccordionModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
