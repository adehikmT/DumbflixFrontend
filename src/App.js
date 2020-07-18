import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Tv from "./pages/tv";
import Movies from "./pages/movies";
import Detail from "./pages/detailvidio";
import Pay from "./pages/Payment";
import Profile from "./pages/Profile";
import Transaksi from "./pages/transaction";
import AddFilem from "./pages/addFilem";
import NoMatch from "./pages/404";
import Loading from "./component/loading";
import PrivateRoute from "./component/utils/PrivateRoute";
import PrivateAdmin from "./component/utils/PrivateAdmin";

function App() {
  return (
    <>
      <Router>
        <Loading>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Dashboard {...props} />}
            />
            <PrivateAdmin
              path="/master"
              component={AddFilem}
              title="Films"
              exact
            />
            <PrivateRoute
              path="/transaction"
              component={Transaksi}
              title="Transactions"
              exact
            />
            <PrivateRoute
              path="/payment"
              component={Pay}
              title="Paymant"
              exact
            />
            <PrivateRoute
              path="/profile"
              component={Profile}
              title="Profile"
              exact
            />
            <Route
              path="/detail/:id"
              render={(props) => <Detail {...props} />}
            />
            <Route path="/tv" exact render={(props) => <Tv {...props} />} />
            <Route
              path="/movies"
              exact
              render={(props) => <Movies {...props} />}
            />
            {/* <Route path="/vidio/:id" render={(props) => (<DetailAdmin {...props}/>)}/> */}
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Loading>
      </Router>
    </>
  );
}

export default App;
