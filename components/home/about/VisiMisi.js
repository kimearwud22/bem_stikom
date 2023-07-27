import React, { useState, useEffect } from "react";

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

  const styles = {
    kabinetItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: "30px",
    },
    kabinetContent: {
      textAlign: "center",
      padding: "10px",
    },
    kabinetImage: {
      maxWidth: "100%",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    kabinetHeading: {
      fontWeight: "bold",
      fontSize: "1.2rem",
      marginBottom: "10px",
    },
    kabinetList: {
      listStyleType: "disc",
      padding: "0",
    },
    kabinetListItem: {
      marginBottom: "5px",
    },
  };

  return (
    <div>
      <section className="section section-lg bg-gray-100">
        <div className="container">
          {data.length > 0 ? (
            data.map((item, index) => (
              <div
                key={index}
                className="row row-50 justify-content-center justify-content-lg-between"
              >
                <div className="col-12">
                  <h2 className="h-custom-1 f1">Kabinet</h2>
                </div>
                <div className="col-md-6 col-lg-5 col-xl-3 wow fadeIn">
                  <h4>Visi</h4>
                  <p>{item.visi}</p>
                </div>
                <div className="col-md-6 col-lg-5 col-xl-3 wow fadeIn">
                  <h4>Misi</h4>
                  <p>{item.misi}</p>
                </div>
                <div
                  className="col-xl-4 wow fadeIn d-flex justify-content-center"
                  data-wow-delay=".4s"
                >
                  <img className="img-rounded " src={item.image} alt />
                </div>
              </div>
            ))
          ) : (
            <div>Data Kosong</div>
          )}
        </div>
      </section>
    </div>
  );
};
