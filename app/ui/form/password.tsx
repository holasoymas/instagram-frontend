import { SignupForm } from "../../lib/definations";
import "../../styles/login.css";

export const PasswordInputField: React.FC<SignupForm> = ({
  formData,
  handleChange,
  handleSubmit,
}) => {
  const { password, repeatPassword } = formData;
  return (
    <>
      <div className="container">
        <div className="box">
          <h1>Password</h1>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="password"></label>
              <input
                type="password"
                placeholder="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="repeatPassword"></label>
              <input
                type="password"
                placeholder="repeat password"
                id="repeatPassword"
                name="repeatPassword"
                value={repeatPassword}
                onChange={handleChange}
                // required
              />
            </div>
            <button type="submit" className="login-button" id="password-btn">
              Next Step
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
