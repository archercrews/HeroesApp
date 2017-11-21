import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Navbar from '../components/homePage/navMenu';
import HomePageContainer from '../components/homePage/homePageContainer';
import HeroesContainer from '../components/heroesPage/heroesContainer';

const routes = [
    {
        path: '/',
        exact: true,
        component: HomePageContainer
    },
    {
        path: '/heroes',
        component: HeroesContainer
    }
];

export default () => {
        return(
            <BrowserRouter>
                <div>
                    <Navbar/>
                    {routes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        )
                    })}
                </div>

            </BrowserRouter>
        )
}
