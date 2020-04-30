import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratepasswordComponent } from './generatepassword/generatepassword.component';
import { AllcompanyComponent } from './allcompany/allcompany.component';


const routes:Routes=[
    {path:'',component:GeneratepasswordComponent},
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class WebPasswordRoutingModule{

}
