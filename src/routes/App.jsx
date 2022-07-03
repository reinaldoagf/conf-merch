import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from "react-router-dom";

import { Home, CheckOut, Information, Payment, Success, NotFound } from "../containers"
import Layout from '../components/Layout';
const app = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/checkout" component={CheckOut} />
                    <Route exact path="/checkout/information" component={Information} />
                    <Route exact path="/checkout/payment" component={Payment} />
                    <Route exact path="/checkout/success" component={Success} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default app;