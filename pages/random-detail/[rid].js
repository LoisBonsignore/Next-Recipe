import Image from "next/image";

export const getServerSideProps = async (context) => {
  console.log("Id", context.query.id);
  const res = await fetch(
    "https://themealdb.com/api/json/v1/1/lookup.php?i=" + context.query.id
  );
  const data = await res.json();
  console.log("data", data);
  return {
    props: { data: data },
  };
};

function randomDetail({ data }) {
  return <p>{data?.meals?.[0]?.strMeal}</p>;
}

export default randomDetail;
