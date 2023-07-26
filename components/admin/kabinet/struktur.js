import React, { useState, useEffect} from "react";
import { useRouter } from "next/router";

export default function Struktur() {
    const [name, setName] = useState("");
    const [jabatan, setJabatan] = useState("");
    const [periode, setPeriode] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [filename, setFilename] = useState('')
    const router = useRouter();
  
    const handleUpload = (event) => {
      setImage(event.target.files[0]);
      try {
        if (!event.target.files || event.target.files.length == 0) {
          throw new Error('Pilih file untuk diunggah!')
        }
        const file = event.target.files[0]
        const fileExt = file.name.split('.').pop()
        setFilename(file.name)
        console.log(fileExt)
        const parse = Papa.parse(file, {
          delimiter: ";",
          header: true,
          complete: (res) => {
            setParsedData(res)
          }
        })
      } catch (error) {
        console.error(error)
      }
    }
  
    // const handleImgChangge = (e) => {
    //   setImage(e.target.files[0]);
    // };
  
    const handleAddProduct = (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append("name", name);
      data.append("jabatan", jabatan);
      data.append("image", image);
      data.append("periode", periode);
      setLoading(true);
      fetch("/api/bems/create", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setName("");
          setJabatan("");
          setPeriode("");
          setImage(null);
          alert("Data berhasil ditambahkan");
          router.push("/admin");
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          alert("Terjadi kesalahan saat menambahkan data");
        });
    };

  return (
    <div>
      <div className="content-wrapper">
        <div className="row">
          <form onSubmit={handleAddProduct}>
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Basic Table</h4>
                <p className="card-periodeription">
                  {" "}
                  Add className <code>Input Kementrian</code>
                </p>

                {/* Input Teks */}
                <div className="form-group">
                  <label>Nama:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {/* Input Teks */}
                <div className="form-group">
                  <label>Bidang:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={jabatan}
                    onChange={(e) => setJabatan(e.target.value)}
                  />
                </div>
                {/* Input Teks */}
                <div className="form-group">
                  <label>Periode:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={periode}
                    onChange={(e) => setPeriode(e.target.value)}
                  />
                </div>

                {/* Input File */}
                <div className="form-group">
                  <label>Foto:</label>
                  <input
                    type="file"
                    className="form-control-file"
                    onChange={handleUpload} 
                  />
                </div>
                <button type="submit" className="btn btn-primary mr-2"> Submit </button>
              </div>
            </div>
          </div>
            </form>
        </div>
      </div>
    </div>
  );
}
