import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules  } from '@angular/router';
import { GallaryComponent } from './gallary/gallary.component';

const routes: Routes = [

{path:'',component:GallaryComponent},
{path:'',redirectTo:'home',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes
   
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
