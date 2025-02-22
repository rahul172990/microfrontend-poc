import "../App.css";

const Home = () => {
  return (
    <div className="container">
      <div className="card">
        <h2>Micro-Frontend Architecture</h2>

        <p className="description">
          Micro-Frontend Architecture extends the concept of{" "}
          <strong>microservices</strong> to the UI layer, allowing independent
          front-end applications to work together seamlessly.
        </p>

        <div className="section">
          <h3>Key Concepts</h3>
          <ul>
            <li>
              <strong>Decentralized Development:</strong> Teams can work
              independently using different technologies.
            </li>
            <li>
              <strong>Independent Deployment:</strong> Each micro-frontend can
              be deployed separately.
            </li>
            <li>
              <strong>Seamless Integration:</strong> The host application
              dynamically loads micro-frontends.
            </li>
            <li>
              <strong>Scalability & Maintainability:</strong> Breaking
              applications into smaller parts makes updates easier.
            </li>
          </ul>
        </div>

        <div className="section">
          <h3>Implementation Approaches</h3>
          <ul>
            <li>
              <strong>Module Federation (Webpack 5):</strong> Dynamic loading of
              remote components.
            </li>
          </ul>
        </div>

        <div className="section">
          <h3>Use Cases</h3>
          <ul>
            <li>Large-scale enterprise applications</li>
            <li>Multi-team development environments</li>
            <li>SaaS platforms with modular UI components</li>
            <li>Gradual migration from monolith to a distributed system</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
