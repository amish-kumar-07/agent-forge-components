import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Agent } from "@/data/agents";
import { ChevronRight } from "lucide-react";

interface AgentCardProps {
  agent: Agent;
}

export const AgentCard = ({ agent }: AgentCardProps) => {
  return (
    <Link to={`/agents/${agent.slug}`}>
      <Card className="group h-full transition-all duration-200 hover:shadow-lg hover:border-primary/50">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="group-hover:text-primary transition-colors">
                {agent.name}
              </CardTitle>
              <CardDescription className="mt-2">{agent.description}</CardDescription>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="secondary">{agent.category}</Badge>
            {agent.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <code className="text-xs bg-muted px-2 py-1 rounded block overflow-x-auto">
            {agent.installCommand}
          </code>
        </CardContent>
      </Card>
    </Link>
  );
};
