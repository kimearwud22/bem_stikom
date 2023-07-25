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
                      <div className="counter">Sekolah Tinggi Ilmu Komputer PGRI Banyuwangi</div>
                    </div>
                    {/* <p className="counter-minimal-title"></p> */}
                  </article>
                </div>
                {/* Add other counter articles here */}
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-5">
              <h4>@Bemstikombwi & @stikombwi </h4>
              {/* Add Twitter Feed articles here */}
            </div>
            <div className="col-sm-6 col-lg-5 col-xl-4">
              <div className="row row-50 row-xl-70">
                <div className="col-12">
                  <h3>About Us</h3>
                  <p>
                  STIKOM BANYUWANGI merupakan kampus TI yang terlengkap di Banyuwangi. STIKOM BANYUWANGI memiliki Gedung Berlantai 3 dengan fasilitas - fasilitas yang sangat memadai untuk dunia IT. Dan sampai saat ini STIKOM terus menerus melakukan perubahan yang lebih baik dan mencetak lulusan - lulusan terbaik agar sesuai semboyan STIKOM BANYUWANGI
                  </p>
                </div>
                {/* <div className="col-12">
                  <h3>Newsletter</h3>
                  <p>
                    Keep up with our weekly news and updates on education.
                    Enter your e-mail and subscribe to our newsletter.
                  </p>
                </div> */}
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
            <span>copyright.</span>
            <span>&nbsp;</span>
            <br className="d-sm-none" />
            <a href="#">Menkominfo 2022-2023</a>
            {/* <span> and</span> */}
            <span>&nbsp;</span>
            {/* <a href="#">Privacy Policy</a>. Design&nbsp;by&nbsp;
            <a href="https://www.templatemonster.com/">TemplateMonster</a> */}
          </p>
        </div>
      </div>
    </footer>
  );
};
