// This File Contains all the Routes of the Application

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// This variable contains all the routes
const appRoutes: Routes = [
    // We Need a Empty path for the Home Page
    // Add pathMatch: 'full' property to the Empty Path Always, so that it redirects without errors
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },

]

// Add NgModule to transform the TypeScript class into a Angular Module
@NgModule({
    // Configure the Router
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}