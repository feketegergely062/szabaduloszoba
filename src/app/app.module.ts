import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UjfoglalasComponent } from './ujfoglalas/ujfoglalas.component';
import { FormsModule } from '@angular/forms';
import { HuComponent } from './hu/hu.component';
import { FoglalasokComponent } from './foglalasok/foglalasok.component';
import { KezdooldalComponent } from './kezdooldal/kezdooldal.component';

@NgModule({
    declarations: [
        AppComponent,
        KezdooldalComponent,
        FoglalasokComponent,
        UjfoglalasComponent,
        HuComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }