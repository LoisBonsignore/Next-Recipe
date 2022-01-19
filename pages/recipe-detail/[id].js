import Image from "next/image";

export const getServerSideProps = async (context) => {
  console.log("Id", context.query.id);
  const res = await fetch(
    "https://themealdb.com/api/json/v1/1/lookup.php?i=" + context.query.id
  );
  const data = await res.json();

  return {
    props: { data: data },
  };
};

function recipeDetail({ data }) {
  console.log("data:", data);
  console.log("ingr", data?.meals?.[0]?.strIngredient1);
  return (
    <div>
      <h1>{data?.meals?.[0]?.strMeal}</h1>
      <Image src={data?.meals?.[0]?.strMealThumb} width={450} height={450} />
      <h2>Ingredients</h2>
      {data ? (
        <div>
          <p>
            {data?.meals?.[0]?.strIngredient1} {data?.meals?.[0]?.strMeasure1}
          </p>
          <p>
            {data?.meals?.[0]?.strIngredient2} {data?.meals?.[0]?.strMeasure2}
          </p>
          <p>
            {data?.meals?.[0]?.strIngredient3} {data?.meals?.[0]?.strMeasure3}
          </p>
          <p>
            {data?.meals?.[0]?.strIngredient4} {data?.meals?.[0]?.strMeasure4}
          </p>
          <p>
            {data?.meals?.[0]?.strIngredient5} {data?.meals?.[0]?.strMeasure5}
          </p>
          <p>
            {data?.meals?.[0]?.strIngredient6} {data?.meals?.[0]?.strMeasure6}
          </p>
          <p>
            {data?.meals?.[0]?.strIngredient7} {data?.meals?.[0]?.strMeasure7}
          </p>
          <p>
            {data?.meals?.[0]?.strIngredient8} {data?.meals?.[0]?.strMeasure8}
          </p>
          <p>
            {data?.meals?.[0]?.strIngredient9} {data?.meals?.[0]?.strMeasure9}
          </p>
          <p>
            {data?.meals?.[0]?.strIngredient10} {data?.meals?.[0]?.strMeasure10}
          </p>
          <p>
            {data?.meals?.[0]?.strIngredient11} {data?.meals?.[0]?.strMeasure11}
          </p>
          <p>
            {data?.meals?.[0]?.strIngredient12} {data?.meals?.[0]?.strMeasure12}
          </p>
          <p>
            {data?.meals?.[0]?.strIngredient13} {data?.meals?.[0]?.strMeasure13}
          </p>
          <p>
            {data?.meals?.[0]?.strIngredient14} {data?.meals?.[0]?.strMeasure14}
          </p>
          <p>
            {data?.meals?.[0]?.strIngredient15} {data?.meals?.[0]?.strMeasure15}
          </p>
          <p>
            {data?.meals?.[0]?.strIngredient16} {data?.meals?.[0]?.strMeasure16}
          </p>
          <p>
            {data?.meals?.[0]?.strIngredient17} {data?.meals?.[0]?.strMeasure17}
          </p>
          <p>
            {data?.meals?.[0]?.strIngredient18} {data?.meals?.[0]?.strMeasure18}
          </p>
          <p>
            {data?.meals?.[0]?.strIngredient19} {data?.meals?.[0]?.strMeasure19}
          </p>
          <p>
            {data?.meals?.[0]?.strIngredient20} {data?.meals?.[0]?.strMeasure20}
          </p>
        </div>
      ) : null}

      <h2>Instructions</h2>
      <p>{data?.meals?.[0]?.strInstructions}</p>

      <h3>Source:</h3>
      <a href={data?.meals?.[0]?.strSource}>{data?.meals?.[0]?.strSource}</a>
    </div>
  );
}

export default recipeDetail;
