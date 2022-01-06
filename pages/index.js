import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export const getStaticProps = async (context) => {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const data = await res.json();

  return {
    props: { recipe: data },
  };
};

export default function Home({ recipe }) {
  console.log("recette récup:", recipe);
  return (
    <div className={styles.container}>
      <Head>
        <title>Next-Recipe | Home</title>
        <meta name="Home" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next-Recipe</h1>
        <p>
          Next-Recipe is a web app where you can check recipes from all around
          the world !
        </p>
        <p>Here is a random recipe :</p>
        <p>{recipe?.meals?.[0]?.strMeal}</p>
        <p>
          This meal is a {recipe?.meals?.[0]?.strArea}{" "}
          {recipe?.meals?.[0]?.strCategory} preparation.
        </p>
        <Image
          src={recipe?.meals?.[0]?.strMealThumb}
          width={450}
          height={450}
        />
      </main>
    </div>
  );
}
