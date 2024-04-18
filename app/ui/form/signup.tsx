import "../../styles/login.css";
import Link from "next/link";
import { SignupForm } from "../../lib/definations";
import { OAuthSeperator } from "./OAuthSeperator";

export const Signup: React.FC<SignupForm> = ({ formData, handleChange, handleSubmit }) => {
  const { firstName, lastName, username, email, gender, birthday } = formData;

  const today = new Date(); // Get the current date for reference
  const minDate = new Date(today.getFullYear() - 100, 0, 1).toISOString().slice(0, 10); // Minimum age: 100 years old
  const maxDate = new Date(today.getFullYear() - 13, 0, 1).toISOString().slice(0, 10); // User cannot be 13 years younger

  return (
    <div className="container">
      <div className="signup-form box">
        <h1>Sign Up</h1>
        <form id="step1-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="firstName"></label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="lastName"></label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="username"></label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              value={username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender" value={gender} onChange={handleChange} required>
              <option value="">-- Select Gender --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-Binary">Non-Binary</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="birthday"></label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              value={birthday}
              min={minDate}
              onChange={handleChange}
              max={maxDate}
              required
            />
          </div>
          <button type="submit" className="login-button" id="next-step-btn">
            Next Step
          </button>
        </form>
        <OAuthSeperator text="Signup" />
        <div>
          <p>
            Already have an account? <Link href="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
