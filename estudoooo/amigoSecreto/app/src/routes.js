import React from 'react';

import { BrowserRouter ,Switch , Route } from 'react-router-dom';


//  ADMIN
import Dashboard from './pages/dashboard/index';



export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                {/*Rotas CLiente */}
                <Route path="/" exact component={Dashboard} />
               
            </Switch>
        </BrowserRouter>
    )
}