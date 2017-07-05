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

                    let level = parseInt(this.authlevel);
                    switch(level) {
                        case AuthLevel.ADMIN:
                            console.log("Level 0 received - login component");
                            //this.router.navigate(['/admin']);
                            break;

                        case AuthLevel.COUNTRY_HEAD:
                            console.log("Level 1 received");
                            //this.router.navigate(['/country']);
                            break;

                        case AuthLevel.STATE_HEAD:
                            console.log("Level 2 received");
                            //this.router.navigate(['/state']);
                            break;

                        case AuthLevel.DISTRICT_HEAD:
                            console.log("Level 3 received");
                            //this.router.navigate(['/district']);
                            break;

                        case AuthLevel.CITY_HEAD:
                            console.log("Level 4 received");
                            //this.router.navigate(['/city']);
                            break;

                        default:
                            console.log("Invalid Level received");
                            this.router.navigate(['/']);
                    }
                    this.router.navigate(['/']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
