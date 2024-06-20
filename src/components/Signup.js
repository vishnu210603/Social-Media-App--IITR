// src/components/Signup.js
/*
import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" ref={emailRef} required />
        <label>Password</label>
        <input type="password" ref={passwordRef} required />
        <label>Password Confirmation</label>
        <input type="password" ref={passwordConfirmRef} required />
        <button disabled={loading} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
*/

// src/components/Signup.js

/*

import React, { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Alert, Typography } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        online: true,
      });
      navigate("/");
    } catch {
      setError("Account Created, Login to proceed");
    }

    setLoading(false);
  }

  return (
    <div>
      <Typography variant="h4" component="h2">
        Sign Up
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
        <TextField
          label="Password Confirmation"
          type="password"
          inputRef={passwordConfirmRef}
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
          Sign Up
        </Button>
      </form>
    </div>
  );
}
*/ 

// src/components/Signup.js
/*
import React, { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Alert, Typography } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        online: true,
      });
      navigate("/");
    } catch (error) {
      setError("Failed to create an account: " + error.message);
    }

    setLoading(false);
  }

  return (
    <div>
      <Typography variant="h4" component="h2">
        Sign Up
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
        <TextField
          label="Password Confirmation"
          type="password"
          inputRef={passwordConfirmRef}
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
          Sign Up
        </Button>
      </form>
    </div>
  );
}
*/

// src/components/Signup.js
import React, { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Alert, Typography } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        online: true,
      });
      navigate('/'); // Redirect to News Feed page
    } catch (error) {
      setError("Failed to create an account: " + error.message);
    }

    setLoading(false);
  }

  return (
    <div>
      <Typography variant="h4" component="h2">
        Sign Up
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
        <TextField
          label="Password Confirmation"
          type="password"
          inputRef={passwordConfirmRef}
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
          Sign Up
        </Button>
      </form>
    </div>
  );
}
