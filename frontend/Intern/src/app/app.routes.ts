import { Routes } from '@angular/router';
import { AddReviewComponent } from './pages/add-review/add-review.component';
import { AllReviewsComponent } from './pages/all-reviews/all-reviews.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { SearchReviewComponent } from './pages/search-review/search-review.component';
import { UpdateComponent } from './pages/update/update.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: "home",
        component: NavBarComponent,
        children: [
            {
                path: "all",
                component: AllReviewsComponent
            },
            {
                path: "add",
                component: AddReviewComponent
            },
            {
                path: "search",
                component: SearchReviewComponent
            },
            {
                path: "update",
                component: UpdateComponent
            },

        ]

    },
    {
        path:"",
        component:HomeComponent
    }
];
