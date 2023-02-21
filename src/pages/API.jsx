import { useEffect, useState } from "react";
import "./API.css";

const Api = () => {
  const [motos, setMotos] = useState([]);
  const [loaded, setloaded] = useState(false);
  const [newMoto, setNewMoto] = useState({
    image: "",
    name: "",
    subname: "",
    cc: "",
  });
  const [error, setError] = useState(null);
  const [editMoto, setEditMoto] = useState({
    image: "",
    name: "",
    subname: "",
    cc: "",
  });

  const getMotos = async () => {
    const res = await fetch ("https://63ee3030d466e0c18baafe9c.mockapi.io/Moto");
    const data = await res.json();
    setMotos(data);
    setloaded(true);
  };

  const createMoto = (ev) => {
    ev.preventDefault();
    if (!newMoto.image || !newMoto.name || !newMoto.subname || !newMoto.cc) {
      setError("Formulario imcompleto");
    } else {
      setError(null);
      fetch ("https://63ee3030d466e0c18baafe9c.mockapi.io/Moto", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newMoto),
      }).then((res) => {
        getMotos();
      });
    }
  };

  const deleteMoto = (id) => {
    fetch(`https://63ee3030d466e0c18baafe9c.mockapi.io/Moto/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      getMotos();
    });
  };

  const handleEditMoto = (ev, id) => {
    ev.preventDefault();
    fetch(`https://63ee3030d466e0c18baafe9c.mockapi.io/Moto/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(editMoto),
    }).then((res) => {
      getMotos();
    });
  };

  useEffect(() => {
    getMotos();
  }, []);

  return (
    <div className="Api">
      {loaded ? (
        motos.map((moto) => (
          <div className="motocard" key={moto.id}>
            <img src={moto.image} alt={moto.name} />
            <h3>{moto.name}</h3>
            <h3>{moto.subname}</h3>
            <h3>{moto.cc}</h3>
            <button onClick={() => setEditMoto(moto)}>Edit</button>
            <button onClick={() => deleteMoto(moto.id)}>Delete</button>
          </div>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
      <h2>CREATE MOTO</h2>
      <form onSubmit={(ev) => createMoto(ev)}>
        <input
          type="text"
          placeholder="Image URL"
          onChange={(ev) =>
            setNewMoto({ ...newMoto, image: ev.target.value })}
        />
        <input
          type="text"
          placeholder="Brand"
          onChange={(ev) => 
            setNewMoto({ ...newMoto, name: ev.target.value })}
        />
        <input
          type="text"
          placeholder="Model"
          onChange={(ev) =>
            setNewMoto({ ...newMoto, subname: ev.target.value })}
        />
         <input
          type="number"
          placeholder="CC"
          onChange={(ev) =>
            setNewMoto({ ...newMoto, cc: ev.target.value })}
        />
        <button type="submit">Create Moto</button>
      </form>
      {error && <h3>{error}</h3>}
      <h2>EDIT MOTO</h2>
      <form onSubmit={(ev) => handleEditMoto(ev, editMoto.id)}>
        <input
          type="text"
          placeholder="Image URL"
          value={editMoto.image}
          onChange={(ev) =>
            setEditMoto({ ...editMoto, image: ev.target.value })
          }
        />
        <input
          type="text"
          placeholder="Brand"
          value={editMoto.name}
          onChange={(ev) =>
            setEditMoto({ ...editMoto, name: ev.target.value })
          }
        />
        <input
          type="text"
          placeholder="Model"
          value={editMoto.subname}
          onChange={(ev) =>
            setEditMoto({ ...editMoto, subname: ev.target.value })
          }
        />
        <input
          type="number"
          placeholder="CC"
          value={editMoto.cc}
          onChange={(ev) =>
            setEditMoto({ ...editMoto, cc: ev.target.value })
          }
        />
        <button type="submit">Edit Moto</button>
      </form>
    </div>
  );
};

export default Api;