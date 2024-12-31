import { useEffect, useState } from "react";
import styles from "./search.module.css";
import logo from "./searchImage.png";

export default function Search({ setFoodData }) {
  const [input, setInput] = useState("pizza");

  const url = "https://api.spoonacular.com/recipes/complexSearch";
  const apiKey = "28eda64b8c9c41e791cc6175870e0587";

  useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(`${url}?query=${input}&apiKey=${apiKey}`);
      const data = await response.json();
      setFoodData(data.results);
    }
    fetchRecipe();
  }, [input]);

  return (
    <div className={styles.container}>
      <img className={styles.searchLogo} src={logo} alt="search" />
      <input
        className={styles.input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search Here....."
        value={input}
      />
    </div>
  );
}
