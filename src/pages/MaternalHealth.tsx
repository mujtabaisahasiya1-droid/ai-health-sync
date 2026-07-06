import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Utensils, Baby, Stethoscope, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const bannerImg = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4c941c57-352f-4206-81f1-71fa5ab1e477/maternal-health-banner-439d95d2-1783344219716.webp";

const quickLinks = [
    { title: "Appointment Tracker", icon: Calendar, path: "/education" },
    { title: "Nutrition Guide", icon: Utensils, path: "/education" },
    { title: "Baby's Development", icon: Baby, path: "/education" },
    { title: "Symptom Checker", icon: Stethoscope, path: "/triage" },
];

export default function MaternalHealth() {
  const navigate = useNavigate();

  return (
    <div className="p-4 space-y-6">
        <div className="rounded-lg overflow-hidden relative h-40">
            <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 left-4 bg-white/80 hover:bg-white z-10"
                onClick={() => navigate(-1)}>
                <ArrowLeft className="h-5 w-5" />
            </Button>
            <img src={bannerImg} alt="Maternal Health Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h1 className="text-white text-3xl font-bold">Maternal Wellness</h1>
            </div>
        </div>

        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Pregnancy Progress</CardTitle>
                <span className="text-sm font-bold text-primary">24 Weeks</span>
            </CardHeader>
            <CardContent>
                <div className="text-center">
                    <p className="text-4xl font-bold">2nd Trimester</p>
                    <p className="text-muted-foreground">Your baby is the size of a cantaloupe!</p>
                </div>
            </CardContent>
        </Card>

        <div>
            <h2 className="text-xl font-bold mb-4">Quick Tools</h2>
            <div className="grid grid-cols-2 gap-4">
                {quickLinks.map(link => (
                    <Link to={link.path} key={link.title}>
                        <Card className="h-full hover:bg-muted/50 text-center flex flex-col items-center justify-center p-4">
                            <link.icon className="w-8 h-8 text-primary mb-2" />
                            <p className="font-semibold text-sm">{link.title}</p>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  );
}
