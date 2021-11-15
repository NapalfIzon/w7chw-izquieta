import { useState } from "react";
import useUser from "./hooks/useUser";
import Social from "./component/Social/Social";
import RegisterForm from "./component/RegisterForm/RegisterForm";
import LoginForm from "./component/LoginForm/LoginForm";
import "./App.scss";

const App = function () {
  const [showFormulary, setShowFormulary] = useState(false);
  const [showFormField, setShowFormField] = useState(false);
  const {
    user: { isAuthenticated },
  } = useUser();

  const showForm = (event) => {
    event.preventDefault();
    if (event.target.className === "register__button") {
      setShowFormulary(true);
      setShowFormField(true);
    } else if (event.target.className === "login__button") {
      setShowFormulary(true);
      setShowFormField(false);
    } else {
      setShowFormulary(false);
      setShowFormField(false);
    }
  };

  return (
    <>
      <header className="header">
        <div className="title-container">
          <h1>ISDI Coders Red Social</h1>
        </div>
        {!isAuthenticated ? (
          <div className="header__buttons">
            <button className="register__button" onClick={showForm}>
              Regístrate
            </button>
            <button className="login__button" onClick={showForm}>
              Identifícate
            </button>
          </div>
        ) : (
          <div className="header__buttons">
            <button className="logout__button" onClick={showForm}>
              Desconéctate
            </button>
          </div>
        )}
      </header>
      <div className="separator" />
      <main className="main">
        {isAuthenticated ? (
          <Social />
        ) : showFormulary ? (
          showFormField ? (
            <>
              <RegisterForm />
              <div className="form-space-a" />
            </>
          ) : (
            <>
              <LoginForm />
              <div className="form-space-a" />
            </>
          )
        ) : (
          <div className="form-space-b" />
        )}
      </main>
    </>
  );
};

export default App;
