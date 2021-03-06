import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/core/gaurds/auth.gaurd';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { ErrorComponent } from './shared/error/error.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('src/app/entities/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'admin',
        component: LayoutComponent,
        children: [{
            path: 'briefs',
            loadChildren: () => import('src/app/entities/dashboard/dashboard.module').then(m => m.DashboardModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'forum',
            loadChildren: () => import('src/app/entities/contactus/contactus.module').then(m => m.ContactUsModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'parametre',
            loadChildren: () => import('src/app/entities/entities.module').then(m => m.EntitiesModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'users',
            loadChildren: () => import('src/app/entities/entities.module').then(m => m.EntitiesModule),
            canActivate: [AuthGuard]
        }
        ]
    },
    {
        path: 'error',
        component: PageNotFoundComponent,
        // loadChildren: () => import('src/app/shared/error/error.module').then(m => m.ErrorModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
