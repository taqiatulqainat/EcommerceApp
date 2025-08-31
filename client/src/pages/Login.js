// import React, { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ email, password });
//     // later we will call backend API here
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "50px auto" }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;






// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });
//       alert(`Welcome ${res.data.user.name}`);
//       console.log("JWT Token:", res.data.token);
//       setEmail("");
//       setPassword("");
//     } catch (err) {
//       if (err.response && err.response.data && err.response.data.message) {
//         alert(err.response.data.message); // Server error message
//       } else if (err.request) {
//         alert("No response from server. Please check backend.");
//       } else {
//         alert("Login failed: " + err.message);
//       }
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "50px auto" }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <button type="submit" disabled={loading}>
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;







import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert(`Welcome ${res.data.user.name}`);
      // navigate to a protected page if you want
      // e.g., useNavigate()('/profile')
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email" placeholder="Email"
          value={form.email}
          onChange={(e)=>setForm({...form, email:e.target.value})}
          required
        />
        <input
          type="password" placeholder="Password"
          value={form.password}
          onChange={(e)=>setForm({...form, password:e.target.value})}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  );
}

