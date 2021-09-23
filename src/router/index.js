import React from "react";
import { Switch, Route } from "react-router-dom"
import { routeList } from './router_config';

export default function IndexRouter() {
    return (
        <Switch>
            {routeList.map((item, index) => {
                return <Route
                    path={item.path}
                    exact={item.exact}
                    render={item.render}
                    key={index}
                />
            })}
        </Switch>
    )
}
