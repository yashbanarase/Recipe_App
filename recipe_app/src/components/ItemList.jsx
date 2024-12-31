import Item from "./Item";
import style from "./itemList.module.css";

export default function ItemList({ food, isLoading }) {
  return (
    <div className={style.itemList}>
      {isLoading ? (
        <p>Loading Ingredients....</p>
      ) : (
        food.extendedIngredients.map((item) => <Item item={item} />)
      )}
    </div>
  );
}
