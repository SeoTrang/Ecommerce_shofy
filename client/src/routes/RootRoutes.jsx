import React from 'react';
import { Routes, Route } from 'react-router-dom'

import routeData from './routes.json';
import RouteConfig from './RouteConfig';
import Home from '../pages/Home/Home';
import LayoutHome from '../layout/LayoutHome';
import LayoutCommon from '../layout/LayoutCommon';

const RootRoutes = () => {
    return (
        <Routes>
             {RouteConfig.map((route, index) => {
                const Pages = route.component;

                console.log(route.path == '/');
                return (
                    route?.layout == true 
                    ? 
                    (
                        route?.path == '/' 
                        ?
                        <Route key={index} path={route.path} element={<LayoutHome> <Pages/> </LayoutHome>} />
                        :
                        <Route key={index} path={route.path} element={<LayoutCommon> <Pages/> </LayoutCommon>} />
                    )
                    :
                    <Route key={index} path={route.path} element={<Pages/>} />

                    


                )
                
            }
            )}
        </Routes>
    );
};

export default RootRoutes;