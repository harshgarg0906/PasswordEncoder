import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthModule } from './user-management/user-auth.module';
import { GeneratepasswordComponent } from './password-generator/generatepassword/generatepassword.component';




const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',loadChildren:'./user-management/user-auth.module#UserAuthModule'},
  {path:'password',component:GeneratepasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
