import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthModule } from './user-management/user-auth.module';
import { WebPasswordModule } from './password-generator/web-password.module';
import { AllcompanyComponent } from './password-generator/allcompany/allcompany.component';
import { UpdatepasswordComponent } from './password-generator/updatepassword/updatepassword.component';




const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',loadChildren:'./user-management/user-auth.module#UserAuthModule'},
  {path:'password',loadChildren:'./password-generator/web-password.module#WebPasswordModule'},
  {path:'allcompany',component:AllcompanyComponent},
  {path:'update/:id',component:UpdatepasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
