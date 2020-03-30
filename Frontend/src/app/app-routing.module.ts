import { RecipesPageComponent } from './recipes/Recipes-page/recipes-page.component';
import { RegisterComponent } from './register/register.component';
import { HomePaageComponent } from './home-page/home-paage/home-paage.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipeAddComponent } from './recipes/recipe-add/recipe-add.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './shared/guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePaageComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'recipes',
    component: RecipesPageComponent
  },
  {
    path: 'addRecipe',
    component: RecipeAddComponent
  },
  {
    path: 'userProfile',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: HomePaageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}