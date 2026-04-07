import { Routes } from "@angular/router";
import { All } from "./css-heights/all/all";
import { Vh } from "./css-heights/vh/vh";
import { Lvh } from "./css-heights/lvh/lvh";
import { Dvh } from "./css-heights/dvh/dvh";
import { Svh } from "./css-heights/svh/svh";
import { CssMain } from "./css-main/css-main";

export const CSS_ROUTES: Routes = [
    {
        path:'',
        component: CssMain,
        children: [
            {
                path: "height/all",
                component: All
            },
            {
                path: "height/vh",
                component: Vh
            },
            {
                path: "height/lvh",
                component: Lvh
            },
            {
                path: "height/dvh",
                component: Dvh
            },
            {
                path: "height/svh",
                component: Svh
            }
        ]
    }

]