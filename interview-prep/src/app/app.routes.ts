import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TopicExplorerComponent } from './pages/topic-explorer/topic-explorer.component';
import { TopicDashboardComponent } from './pages/topic-dashboard/topic-dashboard.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
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
