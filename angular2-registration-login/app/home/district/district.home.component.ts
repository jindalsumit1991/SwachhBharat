﻿import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import { UserService } from '../../_services/index';
import { AuthLevel } from "../../app.component";

@Component({
    moduleId: module.id,
    templateUrl: 'district.home.component.html'
})

export class DistrictHomeComponent {
    currentUser: any;

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
}