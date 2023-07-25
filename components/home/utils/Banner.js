import React, { useState, useEffect } from 'react';

export default function Banner() {
  const bannerStyle = {
    position: "relative",
    width: "100%",
    height: "600px", 
    backgroundColor: "#f6f6f6", 
  };

  const bannerContentStyle = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: "#fff",
    textAlign: "center",
    paddingTop: "250px",
  };

  const h6Style = {
    fontSize: "18px",
    marginBottom: "10px",
  };

  const h2Style = {
    fontSize: "25px",
    marginBottom: "20px",
  };

  const buttonBlockStyle = {
    marginTop: "30px",
  };

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
    <div className="banner" style={bannerStyle}>
      {loading ? (
        <div>Loading...</div>
      ) : data.length > 0 ? (
        data.map((item, index) => (
          <div
            key={index}
          >
            <div className="banner-image"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url("http://localhost:3000${item.image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: "100%",
              filter: "brightness(50%)",
            }}/>
            <div className="banner-content" style={bannerContentStyle}>
              <h6 style={h6Style}>Badan Eksekutive Mahasiswa</h6>
              <h6 style={h2Style}>
                Sekolah Tinggi Ilmu Komputer PGRI{" "}
                <span className="text-italic font-weight-bold">Banyuwangi</span>
              </h6>
            </div>
          </div>
        ))
      ) : (
        <div className="banner-image">
          <div className="banner-content" style={bannerContentStyle}>
            <h6 style={h6Style}>Badan Eksekutive Mahasiswa</h6>
            <h2 style={h2Style}>
              Sekolah Tinggi Ilmu Komputer PGRI{" "}
              <span className="text-italic font-weight-bold">Banyuwangi</span>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
