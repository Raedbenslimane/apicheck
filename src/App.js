import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Details from "./Details";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const DataUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  };
  useEffect(() => {
    DataUsers();
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<UserList users={users} />}></Route>
          <Route path="/details/:idUsers" element={<Details data={users} />} />
        </Routes>
      </Router>
      );
    </div>
  );
}

export default App;
