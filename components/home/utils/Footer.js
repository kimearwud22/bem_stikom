import React from "react";

export const Footer = () => {
  return (
    <footer className="section footer-classic bg-gray-950">
      <div className="footer-classic-main">
        <div className="container">
          <div className="row row-30">
            <div className="col-lg-3">
              <div className="row row-30 row-xl-40">
                <div className="col-6 col-md-3 col-lg-12">
                  <article className="counter-minimal">
                    <div className="counter-minimal-counter">
                      <div className="counter">97</div>
                      <span className="counter-postfix">%</span>
                    </div>
                    <p className="counter-minimal-title">Graduates</p>
                  </article>
                </div>
                {/* Add other counter articles here */}
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-5">
              <h3>Twitter Feed</h3>
              {/* Add Twitter Feed articles here */}
            </div>
            <div className="col-sm-6 col-lg-5 col-xl-4">
              <div className="row row-50 row-xl-70">
                <div className="col-12">
                  <h3>About Us</h3>
                  <p>
                    Since 1990, our college provides students with high-quality
                    professional education. Together with us, you will have
                    deeper knowledge of the subjects important for your future
                    profession.
                  </p>
                </div>
                <div className="col-12">
                  <h3>Newsletter</h3>
                  <p>
                    Keep up with our weekly news and updates on education.
                    Enter your e-mail and subscribe to our newsletter.
                  </p>
                  {/* Add Newsletter form here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-classic-aside">
        <div className="container">
          {/* Rights section */}
          <p className="rights">
            <span>&copy;&nbsp;</span>
            <span className="copyright-year"></span>
            <span>&nbsp;</span>
            <span>All Rights Reserved.</span>
            <span>&nbsp;</span>
            <br className="d-sm-none" />
            <a href="#">Terms of Use</a>
            <span> and</span>
            <span>&nbsp;</span>
            {/* <a href="#">Privacy Policy</a>. Design&nbsp;by&nbsp;
            <a href="https://www.templatemonster.com/">TemplateMonster</a> */}
          </p>
        </div>
      </div>
    </footer>
  );
};
