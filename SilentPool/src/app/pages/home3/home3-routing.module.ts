import { RouterModule, Routes } from "@angular/router";
import { Home3Component } from "./containers/home3/home3.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: Home3Component
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule{}

