// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  const navigate = useNavigate();

  const showMessage = (text, type = "success") => {
    setMessage(text);
    setMessageType(type);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.username || !credentials.password) {
      showMessage("Veuillez renseigner le nom utilisateur et le mot de passe.", "error");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        credentials
      );

      const { token, role, username } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      localStorage.setItem("role", role);

      showMessage("Connexion réussie.");

      setTimeout(() => {
        navigate("/");
      }, 800);
    } catch (error) {
      if (error.response?.data?.message) {
        showMessage(error.response.data.message, "error");
      } else {
        showMessage("Une erreur est survenue, veuillez réessayer.", "error");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Connexion</h2>

        {message && (
          <div
            className={`p-3 mb-4 rounded border ${messageType === "error"
                ? "bg-red-100 text-red-700 border-red-300"
                : "bg-green-100 text-green-700 border-green-300"
              }`}
          >
            {message}
          </div>
        )}

        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
          className="border border-gray-300 p-2 w-full mb-4"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          className="border border-gray-300 p-2 w-full mb-4"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;