import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "css-main",
        loadChildren: () => import("./modules/css/css.routes").then(m => m.CSS_ROUTES)
    },
    {
        path: "rest-main",
        loadChildren: () => import("./modules/rest/rest.routes").then(m => m.REST_ROUTES)
    },
    {
        path: "azure-main",
        loadChildren: () => import('./modules/azure/azure.routes').then(m => m.AZURE_ROUTES)
    }
];
