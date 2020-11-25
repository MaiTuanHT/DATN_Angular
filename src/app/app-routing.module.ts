import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import{FooterComponent} from './footer/footer.component'
import{HeaderComponent} from './header/header.component'
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
  {path: 'footer' , component: FooterComponent},
  {path: 'header' , component: HeaderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
