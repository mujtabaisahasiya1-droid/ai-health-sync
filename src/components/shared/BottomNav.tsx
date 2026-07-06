import { NavLink } from "react-router-dom";
import { Home, Stethoscope, Baby, BookOpen } from "lucide-react";

const navLinks = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/triage", icon: Stethoscope, label: "Triage" },
  { to: "/maternal-health", icon: Baby, label: "Maternal" },
  { to: "/education", icon: BookOpen, label: "Learn" },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-card border-t border-border shadow-t-sm flex justify-around items-center md:hidden">
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center text-muted-foreground w-full h-full ${
              isActive ? "text-primary" : ""
            }`
          }
        >
          <link.icon className="w-6 h-6 mb-1" />
          <span className="text-xs font-medium">{link.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
