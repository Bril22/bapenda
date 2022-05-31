import React from "react";
import SignIn from "../components/SignIn";

function login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-[url('/image/background.png')]">
      <SignIn />
    </div>
  );
}

export default login;
