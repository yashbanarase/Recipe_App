import styles from "./Nav.module.css";
export default function () {
  return (
    <div className={styles.nav}>
      <div>
        <h1 className={styles.navHead}>Get Food Recipes</h1>
        <h3 className={styles.navSec}>
          Make your meal better by using our recipes
        </h3>
      </div>
    </div>
  );
}
