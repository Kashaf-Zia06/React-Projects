import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Users from "./pages/Users";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register setUsers={setUsers} />} />
        <Route path="/users" element={<Users users={users} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;