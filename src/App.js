import React from "react";

//routing
import { Route, Switch } from "react-router-dom";
//pages
import Main from "./pages/Main/Main";

const App = () => {

    return (
        <div>
            <Switch>
                <Route exact path="/" component={Main} />
            </Switch>
        </div>
    );
};

export default App;
