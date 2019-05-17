import NProgress from 'nprogress';
import Router from 'next/router';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};


const Header = () => (
  <div>
    <div className="logo">
      Habit Tracker App
    </div>
    <Nav />
  </div>
);

export default Header;
