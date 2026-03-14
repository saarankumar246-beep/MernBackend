import { useState } from "react";

function LoginStatus() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <h2>{isLogin ? "Welcome User" : "Please Login"}</h2>

      <button onClick={() => setIsLogin(!isLogin)}>
        Toggle Login
      </button>
    </div>
  );
}

export default LoginStatus