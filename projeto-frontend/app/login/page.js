'use client';

import React, { useState } from 'react';
import './login.css';
import { LiaUserCircle } from "react-icons/lia";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from 'next/navigation';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'O e-mail é obrigatório.';
    } else if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = 'Informe um e-mail válido.';
    }

    if (!password) {
      newErrors.password = 'A senha é obrigatória.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log('Formulário válido. E-mail:', email, 'Senha:', password);
    } else {
      console.log('Formulário inválido.', errors);
    }
  };

  const handleBackClick = () => {
    router.back();
  };

  const handleForgotPasswordClick = (event) => {
    event.preventDefault();
    console.log('Esqueceu a senha clicado.');
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <img src="/vercel.svg" alt="logo" className="login-logo" />
      </div>
      <div className="login-content">
        <div className="login-form-container">
          <div className="login-avatar">
            <LiaUserCircle size={60} />
          </div>
          <h2>Acesse sua conta</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Informe seu endereço de e-mail*"
                value={email}
                onChange={handleEmailChange}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Informe sua senha*"
                  value={password}
                  onChange={handlePasswordChange}
                  className={errors.password ? "input-error" : ""}
                />
                <span
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            <a href="#" className="forgot-password-link" onClick={handleForgotPasswordClick}>
              Esqueci a senha
            </a>
            <button type="submit" className="continue-button">Continuar</button>
          </form>

          {/* Envolve botão voltar fora do form, mas agrupado visualmente */}
          <div className="form-buttons-group">
            <button className="back-button" onClick={handleBackClick}>Voltar</button>
          </div>
        </div>

        {/* Imagem decorativa no lado direito */}
        <div className="login-image-container"></div>
      </div>
    </div>
  );
}

export default LoginPage;
