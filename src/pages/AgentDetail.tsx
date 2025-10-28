import { useParams, Link } from "react-router-dom";
import { agents } from "@/data/agents";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Copy, Check, ExternalLink, Package, Code2, BookOpen, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const AgentDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const agent = agents.find((a) => a.slug === slug);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!agent) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Agent Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The agent you're looking for doesn't exist.
        </p>
        <Button asChild>
          <Link to="/agents">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Agents
          </Link>
        </Button>
      </div>
    );
  }

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="border-b bg-muted/30">
        <div className="container py-8 md:py-12">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link to="/agents">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Agents
            </Link>
          </Button>

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="text-xs">{agent.category}</Badge>
              <span className="text-muted-foreground text-sm">•</span>
              <span className="text-muted-foreground text-sm">Updated October 2025</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{agent.name}</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {agent.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {agent.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            {/* Main Column */}
            <div className="space-y-8">
              {/* Quick Start */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  <h2 className="text-2xl font-bold tracking-tight">Quick Start</h2>
                </div>
                <Separator />
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-muted-foreground" />
                      <CardTitle className="text-base">Installation</CardTitle>
                    </div>
                    <CardDescription>
                      Run this command in your Next.js project
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative group">
                      <pre className="bg-secondary/50 border p-4 rounded-lg overflow-x-auto text-sm">
                        <code className="font-mono">{agent.installCommand}</code>
                      </pre>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => copyToClipboard(agent.installCommand, 0)}
                      >
                        {copiedIndex === 0 ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Usage */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Code2 className="h-5 w-5" />
                  <h2 className="text-2xl font-bold tracking-tight">Usage</h2>
                </div>
                <Separator />
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Basic Example</CardTitle>
                    <CardDescription>
                      Copy and paste this into your application
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative group">
                      <pre className="bg-secondary/50 border p-4 rounded-lg overflow-x-auto max-h-96">
                        <code className="text-sm font-mono leading-relaxed whitespace-pre">
                          {agent.usageExample}
                        </code>
                      </pre>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => copyToClipboard(agent.usageExample, 1)}
                      >
                        {copiedIndex === 1 ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Features (if available) */}
              {agent.features && agent.features.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    <h2 className="text-2xl font-bold tracking-tight">Features</h2>
                  </div>
                  <Separator />
                  
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {agent.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">{feature.split(' ')[0]}</span>
                            <span className="text-sm text-muted-foreground flex-1">
                              {feature.split(' ').slice(1).join(' ')}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* API Documentation */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  <h2 className="text-2xl font-bold tracking-tight">Documentation</h2>
                </div>
                <Separator />
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {agent.apiDocs}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Configuration (if available) */}
              {agent.configuration && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-5 w-5" />
                    <h2 className="text-2xl font-bold tracking-tight">Configuration</h2>
                  </div>
                  <Separator />
                  
                  <Card>
                    <CardContent className="pt-6 space-y-4">
                      {agent.configuration.environmentVariables && (
                        <div>
                          <h3 className="font-semibold mb-2 text-sm">Environment Variables</h3>
                          <ul className="space-y-2">
                            {agent.configuration.environmentVariables.map((env, index) => (
                              <li key={index} className="text-sm">
                                <code className="bg-secondary px-2 py-1 rounded text-xs">
                                  {env}
                                </code>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {agent.configuration.defaultFrom && (
                        <div>
                          <h3 className="font-semibold mb-2 text-sm">Default Sender</h3>
                          <code className="bg-secondary px-2 py-1 rounded text-xs">
                            {agent.configuration.defaultFrom}
                          </code>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://www.npmjs.com/package/@theagentverse" target="_blank" rel="noopener noreferrer">
                      <Package className="mr-2 h-4 w-4" />
                      View on npm
                      <ExternalLink className="ml-auto h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://resend.com/docs" target="_blank" rel="noopener noreferrer">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Resend Docs
                      <ExternalLink className="ml-auto h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Related Agents */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Related Agents</CardTitle>
                  <CardDescription>Other agents in this category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    {agents
                      .filter(
                        (a) =>
                          a.slug !== agent.slug &&
                          (a.category === agent.category || 
                           a.tags.some((tag) => agent.tags.includes(tag)))
                      )
                      .slice(0, 5)
                      .map((relatedAgent) => (
                        <Button 
                          key={relatedAgent.slug} 
                          variant="ghost" 
                          className="justify-start h-auto py-2 px-3"
                          asChild
                        >
                          <Link to={`/agents/${relatedAgent.slug}`}>
                            <div className="text-left">
                              <div className="font-medium text-sm">{relatedAgent.name}</div>
                              <div className="text-xs text-muted-foreground line-clamp-1">
                                {relatedAgent.description}
                              </div>
                            </div>
                          </Link>
                        </Button>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentDetail;
