import { useRouter } from "next/router";

const recipeDetail = () => {
  const router = useRouter();
  const {
    query: { recipe },
  } = router;

  console.log("data:", recipe);
  return (
    <div>
      <h1>Recipe detail</h1>
      <p>{recipe?.meals?.[0]?.strMeal}</p>
    </div>
  );
};

export default recipeDetail;
