import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { TopicExplorerComponent } from './features/topic-explorer/topic-explorer.component';
import { TopicDashboardComponent } from './features/topic-dashboard/topic-dashboard.component';
import { LoginComponent } from './features/login/login.component';
import { SignupComponent } from './features/signup/signup.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'topic-explorer',
        component: TopicExplorerComponent
    },
    {
        path: 'topic-dashboard',
        component: TopicDashboardComponent
    }
];
