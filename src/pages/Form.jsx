import { useState } from "react";

const Form = () => {
  const [ user, setUser ] = useState({
    username: "",
    password: "",
  })

const [error, setError] = useState(null);
const handleSubmit = (ev) => {
  ev.preventDefault();
  if(!user.username || !user.username) {
    setError("Formulario incompleto");
  } else {
    setError(null);
    console.log(user);
  }
};
  return(
    <div>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <input 
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={(ev) => setUser({...user, username: ev.target.value})}
          />
        <input 
          type="text"
          placeholder="Password"
          value={user.password}
          onChange={(ev) => setUser({...user, password: ev.target.value})}
          />
        <button type="submit">Submit</button>
      </form>
      {error !== null && <h2>{error}</h2>}
    </div>
  );
};

export default Form;