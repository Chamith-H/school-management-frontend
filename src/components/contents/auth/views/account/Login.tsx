import "../../../../../styles/contents/auth/views/Login.css";
import InputField from "../../../../shared/InputField";
import SubmitButton from "../../../../shared/SubmitButton";
import LoginPic from "../../../../../assets/icons/Login.jpg";
import { useEffect, useState } from "react";

const Login = (props: any) => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const submitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    props.SubmitValues(inputs);
  };

  useEffect(() => {
    setInputs({ username: "", password: "" });
  }, []);

  return (
    <div className="Login row">
      <div className="col-6 Background-Login">
        <img src={LoginPic} alt="" />
      </div>

      <div className="col-6 Login-Form-Section">
        <i className="bi bi-person-fill-lock"></i>
        <form onSubmit={submitLogin} className="mt-2">
          <InputField
            Label="Uername"
            Placeholder="Enter your username"
            Value={inputs.username}
            GetValue={(value: string) =>
              setInputs({ ...inputs, username: value })
            }
          />
          <InputField
            Label="Password"
            Placeholder="Enter your password"
            Value={inputs.password}
            GetValue={(value: string) =>
              setInputs({ ...inputs, password: value })
            }
          />
          <SubmitButton Title="Continue" />
        </form>
      </div>
    </div>
  );
};

export default Login;
