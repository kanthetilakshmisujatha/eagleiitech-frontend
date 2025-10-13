// import React, { useState } from "react";
// import axios from "axios";
// import "../components/Auth.css";
// import { useNavigate } from "react-router-dom";

// const Auth = () => {
//   const [view, setView] = useState("login");
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     otp: "",
//   });

//   const [message, setMessage] = useState({ type: "", text: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const switchView = (newView) => {
//     setMessage({ type: "", text: "" });
//     setForm({
//       name: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       otp: "",
//     });
//     setView(newView);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const baseURL = "http://localhost:5000/api/auth";

//     try {
//       let res;

//       if (view === "signup") {
//         res = await axios.post(`${baseURL}/signup`, form);
//         setMessage({ type: "success", text: res.data.message });
//         setView("login");
//       }

//       else if (view === "login") {
//         res = await axios.post(`${baseURL}/login`, form);
//         setMessage({ type: "success", text: res.data.message });
//         localStorage.setItem("isLoggedIn", "true");
//         navigate("/home");
//       }

//       else if (view === "forgot") {
//         res = await axios.post(`${baseURL}/forgot-password`, { email: form.email });
//         setMessage({ type: "success", text: res.data.message });
//         setView("otp");
//       }

//       else if (view === "otp") {
//         res = await axios.post(`${baseURL}/verify-otp`, {
//           email: form.email,
//           otp: form.otp,
//         });

//         if (res.data?.status === "verified") {
//           setMessage({
//             type: "success",
//             text: "OTP Verified! Please set new password",
//           });
//           setView("reset-password");
//         } else {
//           throw new Error("Invalid or expired OTP");
//         }
//       }

//       else if (view === "reset-password") {
//         if (form.password !== form.confirmPassword) {
//           setMessage({ type: "error", text: "Passwords do not match" });
//           return;
//         }

//         res = await axios.post(`${baseURL}/reset-password`, {
//           email: form.email,
//           newPassword: form.password,
//           confirmPassword: form.confirmPassword,
//         });

//         setMessage({ type: "success", text: res.data.message });
//         setView("login");
//       }

//     } catch (err) {
//       setMessage({
//         type: "error",
//         text: err?.response?.data?.error || err.message || "Something went wrong",
//       });
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>
//         {{
//           login: "Login",
//           signup: "Sign Up",
//           forgot: "Forgot Password",
//           otp: "Enter OTP",
//           "reset-password": "Reset Password",
//         }[view]}
//       </h2>

//       {message.text && (
//         <div className={message.type === "error" ? "error-msg" : "success-msg"}>
//           {message.text}
//         </div>
//       )}

//       <form onSubmit={handleSubmit}>
//         {view === "signup" && (
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={form.name}
//             onChange={handleChange}
//             required
//           />
//         )}

//         {(view === "signup" ||
//           view === "login" ||
//           view === "forgot" ||
//           view === "otp" ||
//           view === "reset-password") && (
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//         )}

//         {(view === "signup" || view === "login") && (
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />
//         )}

//         {view === "reset-password" && (
//           <>
//             <input
//               type="password"
//               name="password"
//               placeholder="New Password"
//               value={form.password}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={form.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//           </>
//         )}

//         {view === "otp" && (
//           <input
//             type="text"
//             name="otp"
//             placeholder="Enter OTP"
//             value={form.otp}
//             onChange={handleChange}
//             required
//           />
//         )}

//         <button type="submit">
//           {{
//             login: "Login",
//             signup: "Sign Up",
//             forgot: "Send OTP",
//             otp: "Verify OTP",
//             "reset-password": "Reset Password",
//           }[view]}
//         </button>
//       </form>

//       <div className="auth-toggle">
//         {view === "login" && (
//           <>
//             Don't have an account?{" "}
//             <span onClick={() => switchView("signup")}>Sign Up</span> <br />
//             <span onClick={() => switchView("forgot")}>Forgot Password?</span>
//           </>
//         )}

//         {view === "signup" && (
//           <>
//             Already have an account?{" "}
//             <span onClick={() => switchView("login")}>Login</span>
//           </>
//         )}

//         {(view === "forgot" || view === "otp" || view === "reset-password") && (
//           <span onClick={() => switchView("login")}>Back to Login</span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Auth;
// Updated: Frontend Auth.jsx
// Note: Added token handling. For full security, implement axios interceptor for auto-refresh.
// Assume global axios instance with baseURL and interceptors in a separate file (e.g., api.js).
// Here, update login to store accessToken. For other calls, use it in headers.


import React, { useState } from "react";
import axios from "axios";
import "../components/Auth.css";
import { useNavigate, useLocation } from "react-router-dom";

const Auth = () => {
  const [view, setView] = useState("login");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();
  const location = useLocation();

  const api = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
  });

  // Add request interceptor for accessToken
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const switchView = (newView) => {
    setMessage({ type: "", text: "" });
    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      otp: "",
    });
    setView(newView);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseURL = "http://localhost:5000/api/auth";

    // Client-side validation for password match (signup & reset)
    if ((view === "signup" || view === "reset-password") && form.password !== form.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match" });
      return;
    }

    // Client-side min length for passwords
    if ((view === "signup" || view === "login" || view === "reset-password") && form.password.length < 6) {
      setMessage({ type: "error", text: "Password must be at least 6 characters" });
      return;
    }

    try {
      let res;
      let payload = { email: form.email, password: form.password }; // Base payload

      if (view === "signup") {
        payload.name = form.name; // Add name for signup
        // Do NOT include confirmPassword - backend doesn't expect it
        res = await api.post(`${baseURL}/signup`, payload);
        setMessage({ type: "success", text: res.data.message });

        // Store tokens and user data after successful signup
        if (res.data.accessToken) {
          localStorage.setItem("accessToken", res.data.accessToken);
        }
        if (res.data.user) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }

        const intendedPath = localStorage.getItem('intendedPath') || '/admin';
        localStorage.removeItem('intendedPath');
        navigate(intendedPath);
      } else if (view === "login") {
        res = await api.post(`${baseURL}/login`, payload);
        setMessage({ type: "success", text: res.data.message });

        if (res.data.accessToken) {
          localStorage.setItem("accessToken", res.data.accessToken);
        }
        if (res.data.user) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }

        const intendedPath = localStorage.getItem('intendedPath') || '/admin';
        localStorage.removeItem('intendedPath');
        navigate(intendedPath);
      } else if (view === "forgot") {
        res = await api.post(`${baseURL}/forgot-password`, { email: form.email });
        setMessage({ type: "success", text: res.data.message });
        setView("otp");
      } else if (view === "otp") {
        res = await api.post(`${baseURL}/verify-otp`, {
          email: form.email,
          otp: form.otp,
        });

        if (res.data?.status === "verified") {
          setMessage({ type: "success", text: "OTP Verified! Please set new password" });
          setView("reset-password");
        } else {
          throw new Error("Invalid or expired OTP");
        }
      } else if (view === "reset-password") {
        payload.newPassword = form.password;
        payload.confirmPassword = form.confirmPassword; // Backend expects this for reset
        res = await api.post(`${baseURL}/reset-password`, payload);
        setMessage({ type: "success", text: res.data.message });
        setView("login");
      }

    } catch (err) {
      setMessage({
        type: "error",
        text: err?.response?.data?.error || err.message || "Something went wrong",
      });
    }
  };

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      navigate('/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    <div className="auth-container">
      <h2>
        {{
          login: "Login",
          signup: "Sign Up",
          forgot: "Forgot Password",
          otp: "Enter OTP",
          "reset-password": "Reset Password",
        }[view]}
      </h2>

      {message.text && (
        <div className={message.type === "error" ? "error-msg" : "success-msg"}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {view === "signup" && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        )}

        {(view === "signup" ||
          view === "login" ||
          view === "forgot" ||
          view === "otp" ||
          view === "reset-password") && (
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        )}

        {(view === "signup" || view === "login") && (
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
        )}

        {(view === "signup" || view === "reset-password") && (
          <input
            type="password"
            name="confirmPassword"
            placeholder={view === "signup" ? "Confirm Password" : "Confirm New Password"}
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        )}

        {view === "otp" && (
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            value={form.otp}
            onChange={handleChange}
            required
          />
        )}

        <button type="submit">
          {{
            login: "Login",
            signup: "Sign Up",
            forgot: "Send OTP",
            otp: "Verify OTP",
            "reset-password": "Reset Password",
          }[view]}
        </button>
      </form>

      <div className="auth-toggle">
        {view === "login" && (
          <>
            Don't have an account?{" "}
            <span onClick={() => switchView("signup")}>Sign Up</span> <br />
            <span onClick={() => switchView("forgot")}>Forgot Password?</span>
          </>
        )}

        {view === "signup" && (
          <>
            Already have an account?{" "}
            <span onClick={() => switchView("login")}>Login</span>
          </>
        )}

        {(view === "forgot" || view === "otp" || view === "reset-password") && (
          <span onClick={() => switchView("login")}>Back to Login</span>
        )}
      </div>

      {localStorage.getItem('accessToken') && (
        <button onClick={handleLogout} style={{ marginTop: '10px', width: '100%' }}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Auth;