import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : '',
        pathMatch : 'full',
        loadComponent : () =>{
            return import('./componenets/home/home.component').then((m)=>m.HomeComponent);
        }
    },
    //naviagting to task home component
    {
        path : 'task-home',
        loadComponent : ()=> {
            return import('./componenets/task-home/task-home.component').then((m)=>m.TaskHomeComponent);
        },
    }
];
