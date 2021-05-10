import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  const history = useHistory();
  const handleLoginData = (event) => {
    history.push("https://googlebookscloud.azurewebsites.net/main");
  };

  return (
    <div>
      <GoogleLogin
        clientId="760606227333-u1kkd9mpde5ts9n2krmk4ikio8fppfcs.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={handleLoginData}
        onFailure={handleLoginData}
        href="/main"
      />
    </div>
  );
};

export default Login;
