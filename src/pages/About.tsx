import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Users, Zap, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12 border-b border-border">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">About AgentVerse</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Building the future of AI-powered web development, one component at a time.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground">
                AgentVerse is a collection of production-ready AI agent components designed to help
                developers build smarter applications faster. Inspired by the simplicity of shadcn/ui,
                we're making AI integration as easy as copy-paste.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                      <Code2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Developer First</CardTitle>
                      <CardDescription>Built by developers, for developers</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every agent is crafted with developer experience in mind. Clean APIs, excellent
                    documentation, and TypeScript support make integration seamless.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Production Ready</CardTitle>
                      <CardDescription>Battle-tested in real applications</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our agents are used in production by hundreds of applications. Thoroughly tested,
                    optimized, and maintained with regular updates.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Community Driven</CardTitle>
                      <CardDescription>Growing with our community</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We listen to feedback, accept contributions, and build agents that solve real
                    problems. Join our community and help shape the future.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Open Source</CardTitle>
                      <CardDescription>Free and open for everyone</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    AgentVerse is open source and free to use. We believe in building in public and
                    making powerful tools accessible to all developers.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We're on a mission to democratize AI development by making it as simple as installing
                  a package and importing a component. No complex integrations, no boilerplate code, no
                  headaches—just powerful AI capabilities at your fingertips. We believe that every
                  developer should be able to build intelligent applications without being an AI expert.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
