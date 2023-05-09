import React, { Suspense, lazy, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "../../../redux/store";
import Layout from "../../Layout";
import MainWrapper from "../MainWrapper";
import PrivateRoute from "../../../redux/actions/PrivateRoute";
import BenefitRoute from "../../../redux/actions/BenefitRoute";
import Anime from "../../../shared/components/Anime";
import ErrorPage from "../../../shared/components/ErrorPage";

const LoginPage = lazy(() => retry(() => import("../../Auth/LoginPage")));
const RegisterPage = lazy(() => retry(() => import("../../Auth/RegisterPage")));
const Files = lazy(() => retry(() => import("../../Artiste/Files")));
const PasswordPage = lazy(() => retry(() => import("../../Auth/PasswordPage")));
const OtherPage = lazy(() => retry(() => import("../../Auth/OtherPage")));
const ForgotPassword = lazy(() =>
  retry(() => import("../../Auth/ForgotPassword"))
);
const Dashboard = lazy(() => retry(() => import("../../Admin/Dashboard")));
const Artiste = lazy(() => retry(() => import("../../Artiste/Artiste")));

const Artistee = lazy(() => retry(() => import("../../Admin/Artistee")));
const MusicFile = lazy(() => retry(() => import("../../Admin/MusicFile")));
const Payout = lazy(() => retry(() => import("../../Admin/Payout")));
const Royalty = lazy(() => retry(() => import("../../Admin/Royalty")));
const Storage = lazy(() => retry(() => import("../../Admin/Storage")));
const MyPayout = lazy(() => retry(() => import("../../Artiste/MyPayout")));
const MyRoyalty = lazy(() => retry(() => import("../../Artiste/MyRoyalty")));
const ResetPassword = lazy(() =>
  retry(() => import("../../Auth/ResetPassword"))
);

const AdminLogin = lazy(() => retry(() => import("../../Auth/AdminLogin")));
const PhoneOtp = lazy(() => retry(() => import("../../Auth/PhoneOtp")));
const UserProfile = lazy(() =>
  retry(() => import("../../Artiste/UserProfile"))
);
const Subscription = lazy(() =>
  retry(() => import("../../Artiste/Subscription"))
);
const Adverts = lazy(() => retry(() => import("../../Admin/Adverts")));
const Otp = lazy(() => retry(() => import("../../Beneficiary/Otp")));
const Home = lazy(() => retry(() => import("../../Beneficiary/Home")));

const retry = (fn, retriesLeft = 5, interval = 1000) => {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error);
            return;
          }

          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
};

const Artist = () => {
  return (
    <Switch>
      <Route
        path="/app/artiste/dashboard"
        render={(matchprops) => (
          <Suspense fallback={<Anime />}>
            <Artiste {...matchprops} />
          </Suspense>
        )}
      />
      <Route
        path="/app/artiste/files"
        render={(matchprops) => (
          <Suspense fallback={<Anime />}>
            <Files {...matchprops} />
          </Suspense>
        )}
      />
      <Route
        path="/app/artiste/royalty"
        render={(matchprops) => (
          <Suspense fallback={<Anime />}>
            <MyRoyalty {...matchprops} />
          </Suspense>
        )}
      />
      <Route
        path="/app/artiste/payout"
        render={(matchprops) => (
          <Suspense fallback={<Anime />}>
            <MyPayout {...matchprops} />
          </Suspense>
        )}
      />
      <Route
        path="/app/artiste/distribution"
        render={(matchprops) => (
          <Suspense fallback={<Anime />}>
            <Subscription {...matchprops} />
          </Suspense>
        )}
      />
      <Route
        path="/app/artiste/profile"
        render={(matchprops) => (
          <Suspense fallback={<Anime />}>
            <UserProfile {...matchprops} />
          </Suspense>
        )}
      />
    </Switch>
  );
};
const Admin = () => {
  return (
    <Switch>
      <Route
        path="/app/staff/dashboard"
        render={(matchprops) => (
          <Suspense fallback={<Anime />}>
            <Dashboard {...matchprops} />
          </Suspense>
        )}
      />
      <Route
        path="/app/staff/artiste"
        render={(matchprops) => (
          <Suspense fallback={<Anime />}>
            <Artistee {...matchprops} />
          </Suspense>
        )}
      />
      {
        <Route
          path="/app/staff/storage"
          render={(matchprops) => (
            <Suspense fallback={<Anime />}>
              <Storage {...matchprops} />
            </Suspense>
          )}
        />
      }
      <Route
        path="/app/staff/royalty"
        render={(matchprops) => (
          <Suspense fallback={<Anime />}>
            <Royalty {...matchprops} />
          </Suspense>
        )}
      />

      {/*   <Route
        path="/app/staff/file"
        render={(matchprops) => (
          <Suspense fallback={<Anime />}>
            <MusicFile {...matchprops} />
          </Suspense>
        )}
      /> */}
      <Route
        path="/app/staff/advert"
        render={(matchprops) => (
          <Suspense fallback={<Anime />}>
            <Adverts {...matchprops} />
          </Suspense>
        )}
      />
      <Route
        path="/app/staff/payout"
        render={(matchprops) => (
          <Suspense fallback={<Anime />}>
            <Payout {...matchprops} />
          </Suspense>
        )}
      />
    </Switch>
  );
};

const wrappedRoutes = () => {
  return (
    <div>
      <Layout />

      <div className="container__wrap">
        <Route path="/app/artiste" component={Artist} />
        <Route path="/app/staff" component={Admin} />
      </div>
    </div>
  );
};

const Router = ({ publish }) => {
  return (
    <MainWrapper>
      <main>
        <Switch>
          <Route
            path="/register"
            exact
            render={(matchprops) => (
              <Suspense fallback={<Anime />}>
                <RegisterPage {...matchprops} />
              </Suspense>
            )}
          />
          <Route
            path="/login"
            exact
            render={(matchprops) => (
              <Suspense fallback={<Anime />}>
                <LoginPage {...matchprops} />
              </Suspense>
            )}
          />
          <Route
            path="/log_in"
            exact
            render={(matchprops) => (
              <Suspense fallback={<Anime />}>
                <AdminLogin {...matchprops} />
              </Suspense>
            )}
          />
          <Route
            path="/accounts/verify"
            exact
            render={(matchprops) => (
              <Suspense fallback={<Anime />}>
                <PasswordPage {...matchprops} />
              </Suspense>
            )}
          />
          <Route
            path="/forgot_password"
            exact
            render={(matchprops) => (
              <Suspense fallback={<Anime />}>
                <ForgotPassword {...matchprops} />
              </Suspense>
            )}
          />
          {/*  <Route
            path="/benefit_bvn"
            exact
            render={(matchprops) => (
              <Suspense fallback={<Anime />}>
                <BvnVerify {...matchprops} />
              </Suspense>
            )}
          /> */}
          <Route
            path="/royalty/verify"
            exact
            render={(matchprops) => (
              <Suspense fallback={<Anime />}>
                <Otp {...matchprops} />
              </Suspense>
            )}
          />
          <Route
            path="/accounts/reset/password"
            exact
            render={(matchprops) => (
              <Suspense fallback={<Anime />}>
                <ResetPassword {...matchprops} />
              </Suspense>
            )}
          />
          <PrivateRoute
            path="/otp"
            component={(matchprops) => (
              <Suspense fallback={<Anime />}>
                <PhoneOtp {...matchprops} />
              </Suspense>
            )}
          />
          <PrivateRoute
            path="/profile_update"
            component={(matchprops) => (
              <Suspense fallback={<Anime />}>
                <OtherPage {...matchprops} />
              </Suspense>
            )}
          />
          <Route
            path="/benefit_home"
            component={(matchprops) => (
              <Suspense fallback={<Anime />}>
                <Home {...matchprops} />
              </Suspense>
            )}
          />
          {/* <Route
            path="/benefit_profile_update"
            component={(matchprops) => (
              <Suspense fallback={<Anime />}>
                <ProfileUpdate {...matchprops} />
              </Suspense>
            )}
          /> */}
          <PrivateRoute path="/app" component={wrappedRoutes} />
          <Redirect exact from="/" to="/login" />
          <Route component={ErrorPage} />
        </Switch>
      </main>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    </MainWrapper>
  );
};

export default Router;
