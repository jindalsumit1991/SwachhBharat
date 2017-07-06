import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { CountryHomeComponent } from "./home/country/country.home.component";
import { StateHomeComponent } from "./home/state/state.home.component";
import { DistrictHomeComponent } from "./home/district/district.home.component";
import { CityHomeComponent } from "./home/city/city.home.component";
import { AdminHomeComponent } from "./home/admin/admin.home.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'country-head', component: CountryHomeComponent },
    { path: 'state-head', component: StateHomeComponent },
    { path: 'district-head', component: DistrictHomeComponent },
    { path: 'city-head', component: CityHomeComponent },
    { path: 'admin', component: AdminHomeComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);