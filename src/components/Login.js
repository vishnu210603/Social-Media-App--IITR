// src/components/Login.js
/*
import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div>
      <h2>Log In</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" ref={emailRef} required />
        <label>Password</label>
        <input type="password" ref={passwordRef} required />
        <button disabled={loading} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
*/

// src/components/Login.js


import React, { useRef, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Alert, Typography } from "@mui/material";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      setError("Failed to log in: " + error.message);
    }

    setLoading(false);
  }

  return (
    <div>
      <Typography variant="h4" component="h2">
        Log In
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          inputRef={emailRef}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          inputRef={passwordRef}
          required
          fullWidth
          margin="normal"
        />
        <Button
          disabled={loading}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Log In
        </Button>
      </form>
    </div>
  );
}

