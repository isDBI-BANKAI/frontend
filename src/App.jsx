import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Registration from "./pages/Auth/Registration";
import Chat from "./pages/Chat";
import Error from "./pages/Error";

function App() {

  return (
    <div className="flex items-center justify-center flex-col w-full min-h-screen">
      <Routes>
        
        <Route index element={<Home />} />
        
        <Route path="/auth">
          <Route index element={<Registration />} />
        </Route>

        <Route path="/chat">
          <Route index element={<Navigate to="/chat/new" replace />} />
          <Route path=":id" element={<Chat />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
