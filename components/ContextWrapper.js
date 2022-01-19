import { RecipeContext } from "./contexts/Recipe-context";
import { useState } from "react";

export function ContextWrapper({ children, navigation }) {
  const [recipeData] = useState(navigation);

  return (
    <RecipeContext.Provider value={{ recipeData }}>
      {children}
    </RecipeContext.Provider>
  );
}
