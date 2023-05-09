import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../scss/app.scss";
import Anime from "../../shared/components/Anime";
import { hot } from "react-hot-loader";
import store from "../../redux/store";
import { loadUser, loadCountries } from "../../redux/actions/authActions";
import { publish } from "../../redux/actions/advertAction";
import ReduxToastr from "react-redux-toastr";
//import Ads from "../Ads";
import countries, {
  getCountry,
} from "../../containers/Auth/OtherPage/utils/countries";
import Router from "./Router";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      loaded: false,
    };
  }
  componentDidMount() {
    store.dispatch(loadCountries());
    store.dispatch(publish());
    window.addEventListener("load", () => {
      this.setState({ loading: false });
      setTimeout(() => this.setState({ loaded: true }), 10);
    });

    if (localStorage.getItem("GoAuthToken") !== null) {
      store.dispatch(loadUser());
    }
  }
  render() {
    const { loaded, loading } = this.state;

    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            {!loaded && <Anime loading={loading} />}
            <div>
              <Router />
              <ReduxToastr
                timeOut={4000}
                newestOnTop={false}
                preventDuplicates
                position="top-center"
                getState={(state) => state.toastr} // This is the default
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick
              />
              {/* <Ads /> */}
            </div>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default hot(module)(App);
