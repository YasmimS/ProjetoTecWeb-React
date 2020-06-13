import React, { lazy } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";

const cadastro = lazy(() => import("./features/cadastro/views/Agendamento"));
const helloWord = lazy(() => import("./features/helloWord/views/HelloWord"));

export const Routes = () => {
  const rotas = (
      <Switch>
        <Route
          exact
          path="/helloWord"
          component={helloWord}
        />   
        <Route exact path="/helloWord" component={helloWord} />
      </Switch>
    );
  } 

  const AppRoutes = withRouter((p) => rotas);
  return <AppRoutes />;
};

export default Routes;