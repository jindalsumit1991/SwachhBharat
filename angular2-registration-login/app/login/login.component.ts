import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import { AuthLevel } from "../app.component";

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    private userData : any = {};
    private authlevel:any;
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        let authData = {
            "username" : this.model.username,
            "password" : this.model.password
        }

        this.authenticationService.login(authData)
            .subscribe(
                data => {
                    this.authlevel = data.userData.authlevel;
                    this.router.navigate(['/']);
                    /*
                    let level = parseInt(this.authlevel);
                    switch(level) {
                        case AuthLevel.ADMIN:
                            console.log("Level 0 received - login component");
                            //this.router.navigate(['/admin']);
                            this.router.navigate(['/']);
                            //window.location.href='http://52.42.225.35/SwatchBharat/india.html';
                            break;

                        case AuthLevel.COUNTRY_HEAD:
                            console.log("Level 1 received, navigating to country-home");
                            this.router.navigate(['/']);
                            //window.location.href='http://52.42.225.35/SwatchBharat/india.html';
                            break;

                        case AuthLevel.STATE_HEAD:
                            console.log("Level 2 received");
                            //this.router.navigate(['/state-head']);
                            //window.location.href='http://52.42.225.35/SwatchBharat/state.html?stateId=IN-KA&stateName=Karnataka';
                            break;

                        case AuthLevel.DISTRICT_HEAD:
                            console.log("Level 3 received");
                            //this.router.navigate(['/district-head']);
                            //window.location.href='http://52.42.225.35/SwatchBharat/districts.html?stateId=IN-KA&stateName=Karnataka';
                            break;

                        case AuthLevel.CITY_HEAD:
                            console.log("Level 4 received");
                            //this.router.navigate(['/city-head']);
                            //window.location.href='http://52.42.225.35/SwatchBharat/cities.html?stateName=Karnataka&districtName=Bengaluru%20Urban';
                            break;

                        default:
                            console.log("Invalid Level received");
                            this.router.navigate(['/']);
                            break;
                    }
                    this.router.navigate(['/']);
                    */
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
