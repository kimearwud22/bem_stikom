import React, { useState, useEffect } from "react";

export default function Sample() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const getBanner = () => {
      fetch("/api/banner/all", {
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
      getBanner();
    }, []);

  return (
    <div>
      <div className="content-wrapper">
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Basic Table</h4>
                <h1 className="card-description">
                  Banner
                </h1>

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Action</th>
                        <th>Image</th> {/* New column for images */}
                      </tr>
                    </thead>
                    <tbody>
                      {data.length > 0 && data.map((row, index) => (
                        <tr key={index}>
                          <td>
                            <button className="btn btn-primary">Edit</button>
                          </td>
                          <td>
                            <img
                              src={row.image}
                              alt="image"
                              width="200"
                              height="100" 
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
