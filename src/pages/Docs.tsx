import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Code, Rocket, Shield } from "lucide-react";

const Docs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12 border-b border-border">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about integrating AgentVerse components
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <Rocket className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Getting Started</CardTitle>
                    <CardDescription>Quick start guide to using AgentVerse</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Choose an Agent</h3>
                    <p className="text-muted-foreground">
                      Browse our collection of agents and find one that fits your needs. Each agent is
                      designed for a specific use case.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">2. Install the Package</h3>
                    <p className="text-muted-foreground">
                      Use npm, yarn, or pnpm to install the agent package. Each agent page includes the
                      exact installation command.
                    </p>
                    <pre className="mt-2 bg-muted p-3 rounded text-sm">
                      npm install @agentverse/[agent-name]
                    </pre>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">3. Import and Use</h3>
                    <p className="text-muted-foreground">
                      Import the agent component and add it to your React application. All agents are
                      fully typed with TypeScript.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Agent Architecture</CardTitle>
                    <CardDescription>How AgentVerse components work</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Each AgentVerse component is built with a consistent architecture:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>React components with TypeScript support</li>
                  <li>Prop-based configuration for easy customization</li>
                  <li>Built-in error handling and loading states</li>
                  <li>Optimized for performance and tree-shaking</li>
                  <li>Fully accessible following WCAG guidelines</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Best Practices</CardTitle>
                    <CardDescription>Tips for production use</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Store API keys in environment variables, never in code</li>
                  <li>Use error boundaries to catch and handle agent errors gracefully</li>
                  <li>Implement rate limiting for production deployments</li>
                  <li>Test agents thoroughly in development before deploying</li>
                  <li>Monitor agent usage and performance in production</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <Book className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>API Reference</CardTitle>
                    <CardDescription>Common props and configuration</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Most AgentVerse components share common props:
                </p>
                <div className="space-y-3">
                  <div>
                    <code className="text-sm bg-muted px-2 py-1 rounded">apiKey</code>
                    <p className="text-sm text-muted-foreground mt-1">
                      API key for authentication (required for most agents)
                    </p>
                  </div>
                  <div>
                    <code className="text-sm bg-muted px-2 py-1 rounded">onSuccess</code>
                    <p className="text-sm text-muted-foreground mt-1">
                      Callback function called when the agent completes successfully
                    </p>
                  </div>
                  <div>
                    <code className="text-sm bg-muted px-2 py-1 rounded">onError</code>
                    <p className="text-sm text-muted-foreground mt-1">
                      Callback function called when the agent encounters an error
                    </p>
                  </div>
                  <div>
                    <code className="text-sm bg-muted px-2 py-1 rounded">className</code>
                    <p className="text-sm text-muted-foreground mt-1">
                      Optional CSS class name for styling
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Docs;
