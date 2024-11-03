'use client'
import { Input } from "./components/input";
import { Button } from "./components/button";
import { useState } from "react";
import LoadingSpinner from "./components/loading-spinner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/card";
import { fetchRecipes } from "./actions";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const handleGenerateRecipes = async () => {
    setLoading(true);
    const generatedRecipes = await fetchRecipes(prompt);
    setRecipes(generatedRecipes);
    setLoading(false);
  };

  return (
    <main className="p-8">
      <div className="flex items-center gap-2 mb-4">
        <Input
          type="text"
          placeholder="Specify some themes or ingredients"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button type="button" onClick={handleGenerateRecipes}>
          Generate
        </Button>
      </div>
      {loading && <LoadingSpinner />}
      <div className="grid md:grid-cols-3 gap-6">
        {recipes.length > 0 &&
          recipes.map((recipe, i) => (
            <Card key={i} className="flex flex-col flex-1">
              <CardHeader>
                <CardTitle>{recipe.name}</CardTitle>
                <CardDescription>{recipe.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <div className="flex flex-col flex-1 mb-2">
                  <div className="font-semibold mb-1">Ingredients:</div>
                  <div className="border border-gray-300 p-4 rounded-md mb-3">
                    <ul className="list-disc pl-5">
                      {recipe.ingredients.map((ingredient, i) => (
                        <li key={i}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="font-semibold mb-1">Instructions:</div>
                  <ol className="list-decimal pl-5">
                    {recipe.instructions?.map((step, i) => (
                      <li key={i} className="mb-1">{step}</li>
                    ))}
                  </ol>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </main>
  );
}
