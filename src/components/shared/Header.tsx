import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Header() {
  const logoUrl = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4c941c57-352f-4206-81f1-71fa5ab1e477/medilink-logo-75e823bd-1783344169173.webp";

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-card px-4 sm:px-6">
      <Link to="/" className="flex items-center gap-2">
        <img src={logoUrl} alt="MediLink AI Logo" className="h-8 w-auto" />
        <h1 className="text-lg font-bold text-foreground">MediLink AI</h1>
      </Link>
      <div className="flex items-center gap-2">
        <Link to="/profile">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Profile</span>
          </Button>
        </Link>
      </div>
    </header>
  );
}
