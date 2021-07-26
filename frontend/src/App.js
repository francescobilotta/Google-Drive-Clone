import { useState } from "react";
import "./App.css";
import FilesView from "./components/filesView/FilesView";
import Header from "./components/header/index";
import Sidebar from "./components/sidebar/index";
import SideIcons from "./components/sideIcons/index";

function App() {
  const [user, setUser] = useState({
    displayName: "Francesco Bilotta",
    email: "bilottafrancesco.business@gmail.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL: "https://yt3.ggpht.com/yti/APfAmoE4ExD8iJP0uV9mdfJkWsh2uIG-OLGcHYfHOqcW=s88-c-k-c0x00ffffff-no-rj-mo",
  });
  return (
    <div className="App">
      <Header userPhoto={user.photoURL} />

      <div className="app__main">
        <Sidebar />
        <FilesView />
        <SideIcons />
      </div>

      {/* No Auth: log in */}
    </div>
  );
}

export default App;
