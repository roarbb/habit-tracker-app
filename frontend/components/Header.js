import NProgress from 'nprogress';
import Router from 'next/router';

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
    <div className="bar">
      Header
    </div>
  </div>
);

export default Header;
