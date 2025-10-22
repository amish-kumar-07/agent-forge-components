import { Code2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <Code2 className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold">AgentVerse</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 AgentVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
