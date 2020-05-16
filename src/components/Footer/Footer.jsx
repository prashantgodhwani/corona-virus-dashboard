import React from 'react';

const Footer = () => {
    return (
        <>
        <div style={{textAlign:"center", background:"linear-gradient(90deg, rgb(0,0,0) 0%, rgb(0,0,0) 35%, rgb(3,28,54) 100%)"}}>
            <a href="https://www.mygov.in/covid-19" target="_blank"><img src="https://www.intrustsuper.com.au/wp-content/uploads/INTRUST-SUPER-CORONA-VIRUS-BANNER-What-you-need-to-know-2000-600.png" style={{width:"60%"}} className="img img-responsive"/></a>
        </div>
        <div>
                <div class="row">
                    <div class="col-12">
                        <footer class="footer-area d-sm-flex justify-content-center align-items-center justify-content-between">
                            <div class="copywrite-text">
                                <p class="font-13">Created by @<a href="https://github.com/prashantgodhwani" target="_blank">Prashant Godhwani</a></p>
                            </div>
                            <div class="fotter-icon text-center">
                                <p class="mb-0 font-13">2020 @ PG. </p>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
            </>
    );
}

export default Footer;