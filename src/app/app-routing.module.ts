import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { AchivementsComponent } from './achivements/achivements.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children:[
      {
        path:"profile",
        component: ProfileComponent
      },
      {
        path:"projects",
        component: ProjectsComponent
      },
      {
        path:"achievements",
        component: AchivementsComponent
      },
      {
        path:"education",
        component: EducationComponent
      }
    ]
  },
  { path: 'form', component: FormComponent },
  { path: 'dynamic', component: DynamicFormComponent },
  { path: 'countries', component: CountriesComponent },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'countryDetails/:acode',
    component: CountryDetailsComponent,
  },

  {
    path: 'productDetails',
    component: ProductDetailsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
