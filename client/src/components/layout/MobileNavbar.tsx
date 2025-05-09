import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type MobileNavbarProps = {
  onMenuToggle: () => void;
};

export default function MobileNavbar({ onMenuToggle }: MobileNavbarProps) {
  return (
    <div className="navbar bg-base-100 shadow-sm lg:hidden">
      <div className="flex-none">
        <Button variant="ghost" size="icon" onClick={onMenuToggle}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex-1">
        <span className="text-xl font-bold text-primary">КОМПАНИЯ</span>
      </div>
      <div className="flex-none">
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
