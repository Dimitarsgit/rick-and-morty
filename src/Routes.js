import React from "react";
import { Switch, Route } from "react-router-dom";
import EpisodeListPage from "./pages/episode/list";
import EpisodePreviewPage from "./pages/episode/preview";
import LocationPreviewPage from "./pages/location/preview";
import CharacterListPage from "./pages/character/list";
import AuthPage from "./pages/user/Auth";
import NotFoundPage from "./pages/404";
import PrivateRoute from "./components/route/PrivateRoute";

const Routes = () => (
  <Switch>
    <Route exact path="/sign-up" component={AuthPage} />
    <Route exact path="/sign-in" component={AuthPage} />
    <PrivateRoute exact path="/episode" component={EpisodeListPage} />
    <PrivateRoute exact path="/episode/:id" component={EpisodePreviewPage} />
    <PrivateRoute exact path="/location/:id" component={LocationPreviewPage} />
    <PrivateRoute exact path="/character" component={CharacterListPage} />
    <PrivateRoute exact path="*" component={NotFoundPage} />
  </Switch>
);

export default Routes;
