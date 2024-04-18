import "../../styles/login.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { OAuthSeperatorProps } from "../../lib/definations";

export const OAuthSeperator: React.FC<OAuthSeperatorProps> = ({ text }) => {
  return (
    <>
      <div className="separator">
        <div className="line"></div>
        <p>OR</p>
        <div className="line"></div>
      </div>
      <div className="other">
        <p>{text} with </p>
        <div className="icons">
          <button className="goodBtn">
            <GoogleIcon sx={{ color: "#e4405f" }} />
          </button>
          <button className="goodBtn">
            <FacebookIcon />
          </button>
        </div>
      </div>
    </>
  );
};
