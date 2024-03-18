import { version } from "../package.json";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <header className={styles["main-header"]}>
        <span className="version">{version}</span>
        <span className="version">{version}</span>
        <h1>
          TO
          <span>DDD</span>O
        </h1>
        <h2>TODO app based on DDD</h2>
      </header>
      <div className={styles["wrapper"]}>Main content</div>
    </>
  );
}

export default App;
