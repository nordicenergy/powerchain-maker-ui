// other imports
import { OrderByPipe } from './orderby.pipe';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        // dep modules
    ],
    declarations: [
        OrderByPipe
    ],
    exports: [
        OrderByPipe
    ]
})
export class OrderByModule { }
