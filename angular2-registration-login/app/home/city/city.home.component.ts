import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import { UserService } from '../../_services/index';
import { AuthLevel } from "../../app.component";

@Component({
    moduleId: module.id,
    templateUrl: 'city.home.component.html'
})

export class CityHomeComponent {
    currentUser: any;

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
}