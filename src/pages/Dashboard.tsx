import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const aiAssistantImg = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4c941c57-352f-4206-81f1-71fa5ab1e477/ai-assistant-card-20bf0fdb-1783344191338.webp";
const maternalHealthImg = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4c941c57-352f-4206-81f1-71fa5ab1e477/maternal-health-card-25bb3132-1783344192033.webp";
const healthArticleIcon = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4c941c57-352f-4206-81f1-71fa5ab1e477/health-article-icon-b7b5253c-1783344192579.webp";

const healthArticles = [
  { title: "Understanding Postpartum Depression", category: "Mental Health" },
  { title: "Your Baby's First Year: A Guide", category: "Child Health" },
  { title: "Eating Healthy During Pregnancy", category: "Nutrition" },
];

export default function Dashboard() {
  return (
    <div className="p-4 space-y-6">
      <div className="p-6 rounded-lg bg-primary text-primary-foreground">
          <h1 className="text-2xl font-bold">Welcome, User!</h1>
          <p className="text-primary-foreground/90 mt-1">How can we help you today?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/triage">
            <Card className="h-full flex flex-col justify-between overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                <CardHeader>
                    <CardTitle>AI Health Assistant</CardTitle>
                    <CardDescription>Get guidance on your symptoms</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-end">
                    <img src={aiAssistantImg} alt="AI Assistant" className="w-32 h-32 ml-auto object-contain"/>
                </CardContent>
            </Card>
        </Link>
        <Link to="/maternal-health">
            <Card className="h-full flex flex-col justify-between overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                <CardHeader>
                    <CardTitle>Maternal Health</CardTitle>
                    <CardDescription>Track your pregnancy and wellness</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-end">
                    <img src={maternalHealthImg} alt="Maternal Health" className="w-32 h-32 ml-auto object-contain"/>
                </CardContent>
            </Card>
        </Link>
      </div>

      <div>
          <h2 className="text-xl font-bold mb-4">Health Library</h2>
          <div className="space-y-3">
              {healthArticles.map((article, index) => (
                  <Card key={index} className="hover:bg-muted/50">
                      <Link to="/education" className="block">
                        <CardContent className="p-4 flex items-center gap-4">
                            <img src={healthArticleIcon} alt="Article" className="w-12 h-12 rounded-lg object-cover"/>
                            <div>
                                <p className="font-semibold">{article.title}</p>
                                <p className="text-sm text-muted-foreground">{article.category}</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto"/>
                        </CardContent>
                      </Link>
                  </Card>
              ))}
          </div>
          <Link to="/education" className="block mt-4">
            <Button variant="outline" className="w-full">View All Articles</Button>
          </Link>
      </div>

    </div>
  );
}
