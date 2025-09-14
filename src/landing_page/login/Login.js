// import React, { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:3002/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert("Login successful!");
//         localStorage.setItem("token", data.token); // ✅ store token
//         console.log("User token:", data.token);
//         // redirect to dashboard if needed
//         window.location.href = "https://earnest-rabanadas-b862f4.netlify.app";
//       } else {
//         alert(data.message || "Login failed");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="login">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import "./Login.css"; // <- make sure this file exists (see below)

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://tradeplatform-backend.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Login successful!");
        localStorage.setItem("token", data.token); // store token
        // redirect to deployed dashboard
        window.location.href = "https://comfy-centaur-17c9d0.netlify.app";
      } else {
        alert(data.message || data.error || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login to your account</h2>
        <p className="subtitle">Welcome back — enter your credentials to continue</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          <button type="submit">Login</button>
        </form>

        <p className="signup-text">
          Don’t have an account? <a href="/signup">Create one</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
