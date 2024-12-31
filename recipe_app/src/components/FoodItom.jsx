import style from "./fooditem.module.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={style.itemContainer}>
      <img className={style.itemImage} src={food.image} alt="Food" />
      <div className={style.itemContent}>
        <p className={style.itemName} key={food.title}>
          {food.title}
        </p>
      </div>
      <div className={style.buttonContainer}>
        <button
          className={style.itemButton}
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
