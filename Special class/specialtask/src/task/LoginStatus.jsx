import React from "react";

function LoginStatus() {

  // Variable
  const isLoggedIn = true;

  return (
    <div>
      <h1>Login Status</h1>

      {isLoggedIn ? <h2>Welcome User</h2> : <h2>Please Login</h2>}

    </div>
  );
}

export default LoginStatus;