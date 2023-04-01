import React, { useState, useEffect } from "react";
import style from "./App.module.css";
import axios from "axios";

import { useLocation, useNavigate } from "react-router-dom";

import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/Nav/NavBar";

import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Favorites from "./components/Favorites/Favorites";
import { useDispatch } from "react-redux";
import { addCharacter, addLocation } from "./redux/actions/Actions/actions";

function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "eje@gmail.com";
  const PASSWORD = "@Model101";

  const [characters, setCharacters] = useState([]);
  const location = useLocation();
 

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addLocation(location.pathname))
  }, [location]);

  function login(inputs) {
    if (inputs.password === PASSWORD && inputs.email === EMAIL) {
      setAccess(true);
      navigate("/home");
      return alert("OK");
    }
  }
  function logout() {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  useEffect(() => {
    const requests = [];

    for (let num = 22; num < 24; num++) {
      requests.push(
        axios.get(`https://rickandmortyapi.com/api/character?page=${num}`)
      );
    }

    Promise.all(requests)
      .then((results) => {
        // console.log(":::", results);
        let newCharacters = [];
        results.map(
          (chars) => (newCharacters = [...newCharacters, ...chars.data.results])
        );
        console.log(":::", newCharacters);
        setCharacters([...newCharacters]);
        dispatch(addCharacter(newCharacters))

      })
      .catch((error) => {});
  }, []);

  function onSearch(id) {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        console.log(":::::", data);
        if (data.name) {
          let exist = characters.find((ch) => ch.id === data.id);
          if (exist) {
            alert("ya existe");
          } else {
            setCharacters((oldChars) => [data, ...oldChars]);
            dispatch(addCharacter(data))
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        } 
      });
  }

  function onClose(id) {
    setCharacters((oldChars) => {
      return oldChars.filter((ch) => ch.id !== id);
    });
  }
  return (
    <div className={style.app}>
      {location.pathname === "/" ? null : (
        <NavBar logout={logout} onSearch={onSearch} />
      )}

      <Routes>
        <Route path="/" element={<Login login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/favorites"
          element={<Favorites onClose={onClose} />}
        ></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;

