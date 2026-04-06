import { All } from './modules/css-heights/all/all';
import { Routes } from '@angular/router';
import { Vh } from './modules/css-heights/vh/vh';
import { Lvh } from './modules/css-heights/lvh/lvh';
import { Dvh } from './modules/css-heights/dvh/dvh';
import { Svh } from './modules/css-heights/svh/svh';

export const routes: Routes = [
    {
        path: "all",
        component: All
    },
    {
        path: "vh",
        component: Vh
    },
    {
        path: "lvh",
        component: Lvh
    },
    {
        path: "dvh",
        component: Dvh
    },
    {
        path: "svh",
        component: Svh
    }
];
