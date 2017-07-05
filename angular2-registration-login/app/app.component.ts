import { Component } from '@angular/core';

export enum AuthLevel {
    ADMIN = 0,
    COUNTRY_HEAD = 1 ,
    STATE_HEAD = 2,
    DISTRICT_HEAD = 3,
    CITY_HEAD = 4
}

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent { }