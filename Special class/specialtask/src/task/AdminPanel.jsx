import React from "react";

function AdminPanel() {

  // Variable
  const isAdmin = true;

  return (
    <div>
      <h1>Dashboard</h1>

      {isAdmin && <h2>Admin Dashboard</h2>}

    </div>
  );
}

export default AdminPanel;