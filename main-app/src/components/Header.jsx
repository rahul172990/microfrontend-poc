import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <h1 style={styles.logo}>Micro-Frontend</h1>
        <div style={styles.links}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/chat" style={styles.link}>
            Chat
          </Link>
          <Link to="/email" style={styles.link}>
            Email
          </Link>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    background: "linear-gradient(135deg, #4b6cb7, #182848)",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    padding: "12px 0",
    zIndex: 1000,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
  },
  logo: {
    color: "#fff",
    fontSize: "22px",
    fontWeight: "bold",
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
    transition: "color 0.3s ease-in-out",
    padding: "8px 14px",
    borderRadius: "6px",
  },
  linkHover: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
};

export default Header;
