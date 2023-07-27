import React, { useState, useEffect } from "react";
import Bem from "./Bem";
import Bems from "./Bems";

export default function Struktur() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getStruktur = () => {
    fetch("/api/struktur/all", {
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
    getStruktur();
  }, []);

  return (
    <div className="container py-2">
      <div className="card p-3">
        <div className="row">
          <div className="col-md-12 text-center mb-4">
            <h2>Struktur Organisasi BEM</h2>
          </div>
        </div>
        <div className="row text-center justify-content-center align-items-center">
          {data.length > 0 ? (
            data.map((item, index) => (
              <div className="col-md-3 col-sm-6 text-center" key={index}>
                <div className="card mb-4 shadow">
                  <img
                    src={item.image}
                    alt="CEO"
                    className="card-img-top rounded"
                    style={{ maxWidth: "250px" }}
                  />
                  <div className="card-body">
                    <h3 className="card-title text-secondary">{item.jabatan}</h3>
                    <p className="card-text">{item.name}</p>
                    <p className="card-text">{item.periode}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Data Kosong</div>
          )}
        </div>
        <Bem />
      </div>
      <Bems />
    </div>
  );
}
