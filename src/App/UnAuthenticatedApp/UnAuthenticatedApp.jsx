import React, { useState } from "react";

const UnAuthenticatedApp = () => {
  const [state, setState] = useState("");

  const handleSubmit = () => {
    console.log("ss");
  };

  return (
    <p>
      <h3>Please Login</h3>
      <button onClick={handleSubmit}></button>
    </p>
  );
};
export { UnAuthenticatedApp };
