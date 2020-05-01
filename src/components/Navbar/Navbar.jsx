import React from 'react';

const Navbar = () => {
  return (
    <div className="horizontal-menu">
        <nav className="navbar top-navbar col-lg-12 col-12 p-0">
            <div className="container-fluid">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    <a className="navbar-brand brand-logo" href="index.html"><img src="img/core-img/logo.png" alt="logo" /></a>
                    <a className="navbar-brand brand-logo-mini" href="index.html"><img src="img/core-img/small-logo.png" alt="logo" /></a>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item dropdown">

                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
                        <span className="ti-menu"></span>
                    </button>
                </div>
                <div className="preheader-area d-none d-lg-block">
                    <div className="preheader-content-wrap d-flex align-items-center">
                        <img src="https://www.mygov.in/sites/all/themes/mygov/front_assets/images/logo.png" style={{height:"50px"}}/>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;
