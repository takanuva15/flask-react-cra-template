import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface ProfileData {
  name?: string;
  about?: string;
}

function App() {
  const [profileData, setProfileData] = useState<ProfileData>({});

  const getData = () => {
    fetch("/profile")
      .then((res) => res.json())
      .then(
        (result) => setProfileData(result),
        (error) => console.error(error)
      );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <p>To get your profile details: </p>
        <button onClick={getData}>Click me</button>
        {profileData && (
          <div>
            <p>Profile name: {profileData.name}</p>
            <p>About me: {profileData.about}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
