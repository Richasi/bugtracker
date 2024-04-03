import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 2%;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const AuthRoute=()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        setLoading(false);
      } catch (error) {
        setError("Failed to login");
        setLoading(false);
      }
    };
  
    const handleSignup = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        setLoading(false);
      } catch (error) {
        setError("Failed to signup");
        setLoading(false);
      }
    };
  
    const handleGoogleLogin = async () => {
      setLoading(true);
      try {
        setLoading(false);
      } catch (error) {
        setError("Failed to login with Google");
        setLoading(false);
      }
    };
  
    const handleAvatarUpload = (event) => {
      const file = event.target.files[0];
      setAvatar(file);
    };
  
    return (
        <Container>
      <FormContainer>
        <Title>Welcome to Auth</Title>
        <Form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Form>
        <Form onSubmit={handleSignup}>
          <Input
            type="email"
            placeholder="Email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Signup"}
          </Button>
        </Form>
        <Button onClick={handleGoogleLogin} disabled={loading}>
          {loading ? "Logging in with Google..." : "Login with Google"}
        </Button>
        <h2>Avatar Upload</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarUpload}
          disabled={loading}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </FormContainer>
    </Container>
    );
}

export default AuthRoute;   