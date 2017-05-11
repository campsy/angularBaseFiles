import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import ApplicationComponent from './application/application.component';


@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [ApplicationComponent],
    bootstrap: [ApplicationComponent]
})

export default class AppModule {}
