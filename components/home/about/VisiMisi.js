import React, { useState, useEffect } from 'react';

export const VisiMisi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getKabinet = () => {
    fetch("/api/kabinet/all", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getKabinet();
  }, []);
  return (
    <div>
      <section className="section section-lg bg-gray-100">
        <div className="container">
          <div className="row row-50 justify-content-center justify-content-lg-between">
            <div className="col-12">
              <h3 className="h-custom-1 f1">Kabinet</h3>
            </div>
            {data.length > 0 ? (
              data.map((item, index) => (
            <div key={index} className='row'>
              <div className="col-md-6 col-lg-5 col-xl-3 wow fadeIn">
              <h4>Visi</h4>
              <p>
                {item.visi}
              </p>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-3 wow fadeIn">
              <h4>Misi</h4>
                <ul className="">
                  <li>
                    {item.misi}
                  </li>
                </ul>
            </div>
            <div className="col-xl-4 wow fadeIn" data-wow-delay=".4s">
              <img
                className="img-rounded"
                src={item.image}
                alt
              />
            </div>
            </div>
              )) ) : (
                <div>Data Kosong</div>
              )}
          </div>
        </div>
      </section>
    </div>
  );
};
