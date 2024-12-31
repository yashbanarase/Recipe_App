import { useEffect, useState } from "react";
import style from "./foodDetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  let apiKey = "28eda64b8c9c41e791cc6175870e0587";

  useEffect(() => {
    async function fetchDetail() {
      const res = await fetch(`${url}?apiKey=${apiKey}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchDetail();
  }, [foodId]);

  return (
    <div className={style.recipeCard}>
      <div>
        <h1 className={style.recipeName}> {food.title}</h1>
        <hr />
        <div className={style.imgInfo}>
          <div className={style.imageSize}>
            {" "}
            <img className={style.recipeImage} src={food.image} />
          </div>
          <div className={style.recipeDetails}>
            <span>
              <strong>⏳Time to Make {food.readyInMinutes}</strong>
            </span>
            <br />
            <span>
              🧑‍🤝‍🧑<strong>Serves {food.servings}</strong>
            </span>
            <br />
            <span>
              <strong>
                {food.vegetarian ? "🥕 Vegetarian" : "🍗 Non-Vegetarian"}
              </strong>
            </span>
            <br />
            <span>
              <strong> {food.vegan ? "🐄 Vigan" : "❌ Not-Vigan"}</strong>
            </span>
            <br />

            <span>
              <strong>💲{food.pricePerServing / 100} Per Serving</strong>
            </span>
            <br />
          </div>
        </div>
        <h2 className={style.H2}>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2 className={style.H2}>Instructions</h2>
        <div className={style.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading.....</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
