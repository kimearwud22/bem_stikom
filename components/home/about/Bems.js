// import React from "react";
import React, { useState, useEffect } from "react";

export default function Bems() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getStruktur = () => {
    fetch("/api/bems/all", {
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
    <>
      <div className="container py-2">
        <div className="card p-3">
          <div className="col-md-12 text-center mb-4">
            <h2>Kementrian </h2>
          </div>
          <div className="row rounded">
            {data.length > 0 ? (
              data.map((item, index) => (
                <div className="col-md-3 col-sm-6 text-center" key={index}>
                  <div className="card mb-4 shadow">
                    <img
                      src={item.image}
                      alt="CFO"
                      className="w-auto rounded-top"
                      style={{ maxWidth: "" }}
                    />
                    <div className="">
                      <h4 className="">{item.jabatan}</h4>
                      <p className="">{item.name}</p>
                      <p className="">{item.periode}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>Data Kosong</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
