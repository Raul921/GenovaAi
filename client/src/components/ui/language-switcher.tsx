import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface Language {
  code: string;
  name: string;
  flagSrc: string;
}

const languages: Language[] = [
  { code: "am", name: "አማርኛ", flagSrc: "/images/flags/am.svg" },
  { code: "ar", name: "العربية", flagSrc: "/images/flags/ae.svg" },
  { code: "en", name: "English", flagSrc: "/images/flags/en.svg" },
  { code: "fa", name: "فارسی", flagSrc: "/images/flags/fa.svg" },
  { code: "kk", name: "Қазақша", flagSrc: "/images/flags/kk.svg" },
  { code: "ru", name: "Русский", flagSrc: "/images/flags/ru.svg" },
  { code: "tr", name: "Türkçe", flagSrc: "/images/flags/tr.svg" },
];

export function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = React.useState<Language>(languages[0]);

  const changeLang = (lang: Language) => {
    setCurrentLang(lang);
    // Logic to switch language would go here
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 text-[#182E45] hover:bg-gray-100 hover:text-[#182E45] gap-1 p-1 rounded-md flex items-center"
        >
          <img src={currentLang.flagSrc} alt={currentLang.code} className="w-5 h-5 object-cover rounded-full border border-gray-200" />
          <ChevronDown className="h-3.5 w-3.5 text-gray-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[180px] p-1">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLang(lang)}
            className="cursor-pointer p-2 flex items-center hover:bg-gray-100 rounded-md"
          >
            <img src={lang.flagSrc} alt={lang.code} className="w-5 h-5 object-cover rounded-full border border-gray-200 mr-3" />
            <span className="text-sm font-medium text-[#182E45]">{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}