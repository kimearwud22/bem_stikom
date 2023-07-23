import React from "react";

export const VisiMisi = () => {
  return (
    <div>
      <section className="section section-lg bg-gray-100">
        <div className="container">
          <div className="row row-50 justify-content-center justify-content-lg-between">
            <div className="col-12">
              <h3 className="h-custom-1 f1">Kabinet</h3>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-3 wow fadeIn">
              <h4>Visi</h4>
              <p>
                Menjadi organisasi yang dapat mengembangkan potensi diri dan
                masyarakat melalui pendidikan dan pengembangan diri.
              </p>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-3 wow fadeIn">
              <h4>Misi</h4>
                <ul className="">
                  <li>
                    1. Menjadi wadah pengembangan diri dan masyarakat melalui
                    pendidikan dan pengembangan diri.
                  </li>
                  <li>
                    2. Menjadi wadah pengembangan diri dan masyarakat melalui
                    pendidikan dan pengembangan diri.
                  </li>
                  <li>
                    3. Menjadi wadah pengembangan diri dan masyarakat melalui
                    pendidikan dan pengembangan diri.
                  </li>
                </ul>
            </div>
            <div className="col-xl-4 wow fadeIn" data-wow-delay=".4s">
              <img
                className="img-rounded"
                src="/home/images/home-1-369x341.jpg"
                alt
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
