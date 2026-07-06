import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const healthArticles = [
  { title: "Understanding Postpartum Depression", category: "Mental Health", image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4c941c57-352f-4206-81f1-71fa5ab1e477/health-article-icon-b7b5253c-1783344192579.webp" },
  { title: "Your Baby's First Year: A Guide", category: "Child Health", image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4c941c57-352f-4206-81f1-71fa5ab1e477/health-article-icon-b7b5253c-1783344192579.webp" },
  { title: "Eating Healthy During Pregnancy", category: "Nutrition", image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4c941c57-352f-4206-81f1-71fa5ab1e477/health-article-icon-b7b5253c-1783344192579.webp" },
  { title: "Signs of Early Labor", category: "Maternal Health", image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4c941c57-352f-4206-81f1-71fa5ab1e477/health-article-icon-b7b5253c-1783344192579.webp" },
  { title: "Managing Gestational Diabetes", category: "Maternal Health", image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4c941c57-352f-4206-81f1-71fa5ab1e477/health-article-icon-b7b5253c-1783344192579.webp" },
  { title: "Post-Workout Nutrition", category: "Fitness", image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4c941c57-352f-4206-81f1-71fa5ab1e477/health-article-icon-b7b5253c-1783344192579.webp" },
];

export default function Education() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Health Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {healthArticles.map((article, index) => (
          <Card key={index} className="hover:bg-muted/50 overflow-hidden">
            <Link to={`#`} className="block h-full">
              <img src={article.image} alt={article.title} className="w-full h-32 object-cover"/>
              <CardHeader>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-sm text-muted-foreground">{article.category}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
