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
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginBottom: '30px',
    },
    kabinetContent: {
      textAlign: 'center',
      padding: '10px',
    },
    kabinetImage: {
      maxWidth: '100%',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    kabinetHeading: {
      fontWeight: 'bold',
      fontSize: '1.2rem',
      marginBottom: '10px',
    },
    kabinetList: {
      listStyleType: 'disc',
      padding: '0',
    },
    kabinetListItem: {
      marginBottom: '5px',
    },
  };

  return (
    <div>
<<<<<<< HEAD
      {/* <section className="section section-lg bg-gray-100">
=======
      <section className="section section-md bg-gray-100">
>>>>>>> 7039882fa1c96d305e5d33dea0afd0a92cb3682c
        <div className="container">
          <div className="row row-50 justify-content-center justify-content-lg-between">
            <div className="col-12">
              <h3 className="h-custom-1 f1 text-center">Kabinet</h3>
            </div>
            {data.length > 0 ? (
              data.map((item, index) => (
<<<<<<< HEAD
                <div key={index} className="row">
                  <div className="col-4">
                    <h4>Visi</h4>
                    <p>{item.visi}</p>
                  </div>
                  <div className="col-4">
                    <h4>Misi</h4>
                    <p>{item.misi}</p>
                  </div>
                  <div className="col-4" data-wow-delay=".4s">
                    <img
                      className="border bg-white border-5 border-primary rounded-0 img-fluid"
                      src={item.image}
                      alt
=======
                <div key={index} style={styles.kabinetItem}>
                  <div className="col-md-6 col-lg-5 col-xl-3 wow fadeIn" style={styles.kabinetContent}>
                    <h4 style={styles.kabinetHeading}>Visi</h4>
                    <p>{item.visi}</p>
                  </div>
                  <div className="col-md-6 col-lg-5 col-xl-3 wow fadeIn" style={styles.kabinetContent}>
                    <h4 style={styles.kabinetHeading}>Misi</h4>
                    <ul style={styles.kabinetList}>
                      <li style={styles.kabinetListItem}>{item.misi}</li>
                    </ul>
                  </div>
                  <div className="col-xl-4 wow fadeIn" data-wow-delay=".4s">
                    <img
                      className="img-rounded"
                      src={item.image}
                      alt="Kabinet"
                      style={styles.kabinetImage}
>>>>>>> 7039882fa1c96d305e5d33dea0afd0a92cb3682c
                    />
                  </div>
                </div>
              ))
            ) : (
              <div>Data Kosong</div>
            )}
<<<<<<< HEAD
          </div>
        </div>
      </section> */}
      <section className="section section-lg bg-gray-100">
        <div className="container">
          {data.length > 0 ? (
            data.map((item, index) => (
          <div key={index} className="row row-50 justify-content-center justify-content-lg-between">
            <div className="col-12">
              <h2 className="h-custom-1 f1">Kabinet</h2>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-3 wow fadeIn">
              <h4>Visi</h4>
              <p>
                {item.visi}
              </p>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-3 wow fadeIn">
              <h4>Misi</h4>
              <p>
                {item.misi}
              </p>
            </div>
            <div className="col-xl-4 wow fadeIn d-flex justify-content-center" data-wow-delay=".4s">
              <img
                className="img-rounded "
                src={item.image}
                alt
              />
            </div>
=======
>>>>>>> 7039882fa1c96d305e5d33dea0afd0a92cb3682c
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
