// import React from "react";
import React, {useState, useEffect} from "react";

export default function Bem() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getStruktur = () => {
    fetch("/api/bem/all", {
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

          <div className="row rounded">
          {data.length > 0 ? (
              data.map((item, index) => (
            <div className="col-md-3 col-sm-6 text-center" key={index}>
              <div className="card mb-4 shadow">
                <img
                  src={item.image}
                  alt="CFO"
<<<<<<< HEAD
                  className="w-auto rounded-top"
                  style={{ maxWidth: "" }}
                />
                <div className="">
                  <h4 className="">{item.jabatan}</h4>
                  <p className="">
=======
                  className="card-img-top rounded"
                  style={{ maxWidth: "250px" }}
                />
                <div className="card-body">
                  <h3 className="card-title text-secondary">{item.jabatan}</h3>
                  <p className="card-text">
>>>>>>> 7039882fa1c96d305e5d33dea0afd0a92cb3682c
                    {item.name}
                  </p>
                  <p className="">
                    {item.periode}
                  </p>
                </div>
              </div>
            </div>
            )) ) : (
              <div>Data Kosong</div>
            )}
            {/* <div className="col-md-3 col-sm-6 text-center">
              <div className="card mb-4 shadow">
                <img
                  src="../../../home/images/logo-ukm/bem.jpg"
                  alt="CTO"
                  className="card-img-top rounded-circle"
                  style={{ maxWidth: "150px" }}
                />
                <div className="card-body">
                  <h3 className="card-title">SEKJEN 2</h3>
                  <p className="card-text">
                    Description of CTO role and responsibilities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <div className="card mb-4 shadow">
                <img
                  src="../../../home/images/logo-ukm/bem.jpg"
                  alt="CMO"
                  className="card-img-top rounded-circle"
                  style={{ maxWidth: "150px" }}
                />
                <div className="card-body">
                  <h3 className="card-title">MENKEU 1</h3>
                  <p className="card-text">
                    Description of CMO role and responsibilities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <div className="card mb-4 shadow">
                <img
                  src="../../../home/images/logo-ukm/bem.jpg"
                  alt="CTO"
                  className="card-img-top rounded-circle"
                  style={{ maxWidth: "150px" }}
                />
                <div className="card-body">
                  <h3 className="card-title">MENKEU 2</h3>
                  <p className="card-text">
                    Description of CTO role and responsibilities.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
