import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { AuthLevel } from "../app.component";

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: any;
    users: User[] = [];
    authLevel: string;
    url:string;

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        switch(this.currentUser.userData.authlevel){
            case AuthLevel.ADMIN:
                console.log("Level 0 received - home component, userData -->", this.currentUser.userData);
                this.authLevel = "Admin";
                break;

            case AuthLevel.COUNTRY_HEAD:
                console.log("Level 1 received");
                this.authLevel = "Country Head";
                this.url = "http://52.42.225.35/SwatchBharat/india.html";
                break;

            case AuthLevel.STATE_HEAD:
                console.log("Level 2 received");
                this.authLevel = "State Head";
                this.url = "http://52.42.225.35/SwatchBharat/state.html?stateId=IN-KA&stateName=Karnataka";
                break;

            case AuthLevel.DISTRICT_HEAD:
                this.authLevel = "District Head";
                this.url = "http://52.42.225.35/SwatchBharat/districts.html?stateId=IN-KA&stateName=Karnataka";
                break;

            case AuthLevel.CITY_HEAD:
                this.authLevel = "City Head";
                this.url = "http://52.42.225.35/SwatchBharat/cities.html?stateName=Karnataka&districtName=Bengaluru%20Urban";
                break;

            default:
                console.log("Invalid Level received");
        }
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

}