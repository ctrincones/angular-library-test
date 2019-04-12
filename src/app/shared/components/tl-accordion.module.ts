import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { TLAccordionComponent } from './tl-accordion.component';

@NgModule({
    declarations: [TLAccordionComponent],
    exports: [TLAccordionComponent],
    imports: [AccordionModule]
})
export class TLAccordionModule {}
