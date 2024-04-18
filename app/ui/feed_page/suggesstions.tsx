export default function Suggestions() {
  return (
    <>
      <div className="side-menu__suggestions-section">
        <div className="side-menu__suggestions-header">
          <h2>Suggestions for You</h2>
          <button>See All</button>
        </div>
        <div className="side-menu__suggestions-content">
          <div className="side-menu__suggestion">
            <a href="#" className="side-menu__suggestion-avatar">
              <img src="assets/default-user.png" alt="User Picture" />
            </a>
            <div className="side-menu__suggestion-info">
              <a href="#">usernick17</a>
              <span>Followed by user1, user2 and 3 others</span>
            </div>
            <button className="side-menu__suggestion-button">Follow</button>
          </div>
          <div className="side-menu__suggestion">
            <a href="#" className="side-menu__suggestion-avatar">
              <img src="assets/default-user.png" alt="User Picture" />
            </a>
            <div className="side-menu__suggestion-info">
              <a href="#">usernick18</a>
              <span>Followed by user1 and 9 others</span>
            </div>
            <button className="side-menu__suggestion-button">Follow</button>
          </div>
        </div>
      </div>
    </>
  );
}
