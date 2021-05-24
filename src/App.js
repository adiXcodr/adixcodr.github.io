import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./navigation";
import ChatBot from "./components/ChatBot";
import Loader from "react-loader-spinner";
import axios from "axios";
import { baseUrl } from "./constants";
import { useDispatch } from "react-redux";
import { saveUserData } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const [serverOnline, setServerOnline] = useState(false);
  const loadServer = async () => {
    try {
      let res = await axios.get(`${baseUrl}/userData`);
      if (res.status == 200) {
        await dispatch(saveUserData(res.data));
        setServerOnline(true);
      }
    }
    catch (err) {
      console.log("Could Not Load Server");
    }
  };

  useEffect(() => {
    loadServer();
  }, []);

  if (serverOnline) {
    return (
      <div>
        <Routes />
        <ChatBot />
      </div>
    );
  }
  else {
    return (
      <div style={{ display: "flex", alignContent: "center", justifyContent: "center", alignItems: "center", marginTop: 200 }}>
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
        // timeout={3000} //3 secs
        />
      </div>
    );
  }

};

export default App;
