// src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('success');

  const navigate = useNavigate();

  const showMessage = (text, type = 'success') => {
    setMessage(text);
    setMessageType(type);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.username ||
      !formData.email ||
      !formData.password
    ) {
      showMessage(
        'Veuillez remplir tous les champs.',
        'error'
      );
      return;
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/register`,
        formData
      );

      showMessage(
        'Inscription réussie ! Redirection vers la connexion...'
      );

      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (err) {
      if (err.response?.data?.message) {
        showMessage(err.response.data.message, 'error');
      } else {
        showMessage(
          'Une erreur serveur est survenue.',
          'error'
        );
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Inscription
        </h2>

        {message && (
          <div
            className={`p-3 mb-4 rounded border ${messageType === 'error'
                ? 'bg-red-100 text-red-700 border-red-300'
                : 'bg-green-100 text-green-700 border-green-300'
              }`}
          >
            {message}
          </div>
        )}

        <input
          type="text"
          name="username"
          placeholder="Nom d'utilisateur"
          value={formData.username}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full mb-4"
        />

        <input
          type="email"
          name="email"
          placeholder="Adresse email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full mb-4"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Register;