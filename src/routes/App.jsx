import React from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation
} from "react-router-dom";

import { Home, CheckOut, Information, Payment, Success, NotFound } from "../containers"

const app = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/checkout" component={CheckOut} />
                <Route exact path="/checkout/information" component={Information} />
                <Route exact path="/checkout/payment" component={Payment} />
                <Route exact path="/checkout/success" component={Success} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default app;