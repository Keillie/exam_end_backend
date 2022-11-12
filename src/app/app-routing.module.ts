import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './product/create/create.component';
import { EditComponent } from './product/edit/edit.component';
import { IndexComponent } from './product/index/index.component';
import { ViewComponent } from './product/view/view.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  { path: 'product', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
