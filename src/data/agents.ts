export interface Agent {
  name: string;
  slug: string;
  description: string;
  category: string;
  installCommand: string;
  usageExample: string;
  apiDocs: string;
  tags: string[];
  features?: string[]; // Add this optional property
  configuration?: {
    // Add this optional property
    environmentVariables?: string[];
    defaultFrom?: string;
    emailFields?: string[];
  };
}

export interface Agent {
  name: string;
  slug: string;
  description: string;
  category: string;
  installCommand: string;
  usageExample: string;
  apiDocs: string;
  tags: string[];
  features?: string[];
  configuration?: {
    environmentVariables?: string[];
    defaultFrom?: string;
    emailFields?: string[];
  };
}

export const agents: Agent[] = [
  {
    name: "Email Agent",
    slug: "email-agent",
    description:
      "A pre-built Email-agent.",
    category: "Communication",
    installCommand: "npx @theagentverse/email-agent-cli init",
    usageExample: `// Step 1: Run CLI in your Next.js project
npx @theagentverse/email-agent-cli init

// Step 2: Install Resend
npm install resend

// Step 3: Add API key to .env.local
RESEND_API_KEY=re_your_api_key_here

// Step 4: Import and use the component
'use client';
import React from 'react'
import  EmailAgent  from '@/component/EmailAgent';


function page() {
  return (
    <div className='bg-amber-50'>
      <EmailAgent/>
    </div>
  )
}

export default page`,
    features: [
      "🚀 One-command setup with CLI scaffolding",
      "📧 Pre-built React component with form UI",
      "🔐 Secure server-side API route handling",
      "✅ Form validation and error handling",
      "🎨 Customizable inline styles",
      "📱 Responsive email form design",
      "⚡ Built with TypeScript for type safety",
      "🔄 Real-time loading states and status messages",
      "✉️ Customizable sender email address",
    ],
    apiDocs: `The Email Agent CLI scaffolds three files in your Next.js project:

1. **component/EmailAgent.tsx** - Client-side React component with:
   - Email form (from, to, subject, message fields)
   - Default "from" address: onboarding@resend.dev (user-customizable)
   - Loading states and error handling
   - Inline styled UI components with proper text visibility

2. **app/api/email-agent/route.ts** - Server-side API route that:
   - Reads RESEND_API_KEY from environment variables
   - Accepts custom "from" address from the form
   - Sends emails via Resend API
   - Returns success/error responses

3. **app/types/type.ts** - TypeScript type definitions

The component calls the API route internally, keeping your API key secure on the server. Users can customize the sender email address directly from the UI.`,
    configuration: {
      environmentVariables: [
        "NEXT_PUBLIC_RESEND_KEY -  RESEND_API_KEY -  (required)",
      ],
      defaultFrom:
        "onboarding@resend.dev (can be customized by users in the form)",
      emailFields: ["from", "to", "subject", "html"],
    },
    tags: [
      "email",
      "communication",
      "resend",
      "nextjs",
      "cli",
      "scaffolding",
      "transactional",
      "react",
    ],
  },
  {
    name: "Translation Agent",
    slug: "translation-agent",
    description:
      "AI-powered translation agent supporting 100+ languages with context-aware translations. Perfect for building multilingual applications with intelligent language detection and translation memory.",
    category: "AI & ML",
    installCommand: "npm install @agentverse/translation-agent",
    usageExample: `import { TranslationAgent } from '@agentverse/translation-agent';

function App() {
  const [translated, setTranslated] = useState('');

  return (
    <TranslationAgent 
      apiKey={process.env.TRANSLATION_API_KEY}
      text="Hello, world!"
      sourceLang="en"
      targetLang="es"
      onTranslate={(result) => setTranslated(result)}
    />
  );
}`,
    features: [
      "🌍 Support for 100+ languages",
      "🤖 AI-powered context-aware translations",
      "⚡ Real-time translation streaming",
      "📝 Translation memory and glossaries",
      "🔍 Automatic language detection",
      "📊 Batch translation support",
      "🎯 Domain-specific translations",
      "💾 Translation caching",
    ],
    apiDocs: `Advanced neural machine translation with context preservation. The agent uses state-of-the-art language models to provide accurate translations while maintaining the original meaning and tone.

**Key Features:**
- Automatic language detection
- Custom glossary support for industry-specific terms
- Translation memory for consistency
- Batch processing for large volumes
- Stream mode for real-time translation

**Supported Providers:**
- Google Cloud Translation
- DeepL API
- OpenAI GPT models
- Azure Translator`,
    configuration: {
      environmentVariables: [
        "TRANSLATION_API_KEY - Your translation API key (required)",
        "TRANSLATION_PROVIDER - Provider name: google, deepl, openai (default: google)",
      ],
    },
    tags: [
      "translation",
      "i18n",
      "ai",
      "languages",
      "multilingual",
      "localization",
    ],
  },
  {
    name: "Analytics Agent",
    slug: "analytics-agent",
    description:
      "Privacy-first analytics platform that tracks user behavior and application metrics without cookies. GDPR and CCPA compliant with real-time dashboards and custom event tracking.",
    category: "Analytics",
    installCommand: "npm install @agentverse/analytics-agent",
    usageExample: `import { AnalyticsAgent } from '@agentverse/analytics-agent';

function App() {
  return (
    <>
      <AnalyticsAgent 
        projectId={process.env.ANALYTICS_PROJECT_ID}
        trackPageViews={true}
        trackClicks={true}
        respectDoNotTrack={true}
      />
      
      {/* Track custom events */}
      <button onClick={() => 
        analytics.track('purchase_completed', { amount: 99.99 })
      }>
        Buy Now
      </button>
    </>
  );
}`,
    features: [
      "🔒 Privacy-first, no cookies required",
      "📊 Real-time analytics dashboard",
      "🎯 Custom event tracking",
      "📱 Automatic page view tracking",
      "👥 User session analysis",
      "🌍 Geographic insights",
      "⚡ Performance monitoring",
      "📈 Conversion funnel tracking",
    ],
    apiDocs: `Cookie-free analytics that respect user privacy while providing deep insights into application usage. No consent banners required.

**Tracking Capabilities:**
- Page views with referrer data
- Custom events with metadata
- User sessions and flows
- Performance metrics (Core Web Vitals)
- Error tracking
- A/B test results

**Privacy Features:**
- IP anonymization by default
- Respects Do Not Track
- GDPR and CCPA compliant
- No third-party cookies
- Data retention controls`,
    configuration: {
      environmentVariables: [
        "ANALYTICS_PROJECT_ID - Your project ID (required)",
        "ANALYTICS_ENDPOINT - Custom endpoint URL (optional)",
      ],
    },
    tags: [
      "analytics",
      "tracking",
      "metrics",
      "privacy",
      "gdpr",
      "performance",
    ],
  },
  {
    name: "PayPal Payment Agent",
    slug: "paypal-payment-agent",
    description:
      "PayPal integration for Next.js.",
    category: "Commerce",
    installCommand: "npx @theagentverse/paypal-agent-cli init",
    usageExample: `import PricingModal from '@/component/PaypalPayment';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <PricingModal />
    </div>
  );
}

// Environment variables (.env.local):
// NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id
// PAYPAL_CLIENT_SECRET=your_paypal_secret
// PAYPAL_API_URL=https://api-m.sandbox.paypal.com`,
    features: [
      "💳 Multiple payment methods (PayPal account, credit/debit cards)",
      "🎨 Beautiful pre-built pricing modal with 3 customizable plans",
      "🌍 International payment support (200+ countries)",
      "🔐 Secure server-side payment processing",
      "✅ Automatic payment capture and verification",
      "📱 Mobile responsive design",
      "🎯 TypeScript ready with full type support",
      "⚡ 5-minute setup with CLI installation",
    ],
    apiDocs: `Full-featured PayPal payment integration for Next.js applications. Handles the entire payment flow from pricing display to payment capture with server-side security.

**Payment Methods Supported:**
- PayPal account login
- Credit/Debit cards (Visa, Mastercard, Amex, Discover)
- Guest checkout for cards
- Apple Pay (via PayPal)
- Google Pay (via PayPal)

**Key Features:**
- Pre-built responsive pricing modal
- 3 customizable pricing tiers (Basic, Pro, Premium)
- Automatic order creation and capture
- Transaction logging and success modal
- Error handling and retry logic
- Sandbox and production environment support

**Setup Process:**
1. Run: npx @theagentverse/paypal-agent-cli init
2. Add PayPal credentials to .env.local
3. Import and use the PricingModal component
4. Customize pricing plans in the component

**API Routes Included:**
- POST /api/paypal/create-order - Creates PayPal order
- POST /api/paypal/capture-order - Captures completed payment

**Security:**
- Client secret never exposed to frontend
- Server-side payment processing
- HTTPS required in production
- Environment variable protection
- Input validation on API routes

**Testing:**
- Full PayPal sandbox support
- Test card numbers provided
- Mock payment scenarios
- Sandbox account setup guide`,
    configuration: {
      environmentVariables: [
        "NEXT_PUBLIC_PAYPAL_CLIENT_ID - PayPal Client ID (required)",
        "PAYPAL_CLIENT_SECRET - PayPal Secret Key for server-side (required)",
        "PAYPAL_API_URL - PayPal API endpoint (sandbox or production)",
      ],
    },
    tags: [
      "payments",
      "paypal",
      "commerce",
      "checkout",
      "pricing",
      "nextjs",
      "typescript",
      "react",
    ],
  },
  {
    name: "Auth Agent",
    slug: "auth-agent",
    description:
      "Complete authentication system with OAuth social providers, email/password, magic links, and multi-factor authentication. Includes session management, JWT handling, and user profile management.",
    category: "Security",
    installCommand: "npm install @agentverse/auth-agent",
    usageExample: `import { AuthAgent, useAuth } from '@agentverse/auth-agent';

function App() {
  const { user, signOut } = useAuth();

  return (
    <>
      {!user ? (
        <AuthAgent 
          providers={['google', 'github', 'email']}
          enableMFA={true}
          redirectUrl="/dashboard"
          onLogin={(user) => console.log('Logged in:', user)}
        />
      ) : (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      )}
    </>
  );
}`,
    features: [
      "🔐 OAuth social login (Google, GitHub, Facebook, etc.)",
      "📧 Email/password authentication",
      "✨ Passwordless magic links",
      "🔒 Multi-factor authentication (MFA)",
      "🎫 JWT token management",
      "👤 User profile management",
      "🔄 Session persistence",
      "🛡️ Role-based access control (RBAC)",
    ],
    apiDocs: `Drop-in authentication solution with enterprise-grade security features. Supports multiple authentication methods and includes user management.

**Authentication Methods:**
- Social OAuth (10+ providers)
- Email/Password with verification
- Magic links (passwordless)
- Phone number with SMS OTP
- Biometric authentication

**Security Features:**
- Multi-factor authentication (TOTP, SMS, Email)
- Session management with refresh tokens
- Password strength validation
- Account recovery flows
- Suspicious activity detection
- Rate limiting and DDoS protection

**User Management:**
- Profile customization
- Email verification
- Password reset flows
- Account deletion
- User roles and permissions`,
    configuration: {
      environmentVariables: [
        "AUTH_SECRET - Secret key for JWT signing (required)",
        "GOOGLE_CLIENT_ID - Google OAuth client ID (optional)",
        "GOOGLE_CLIENT_SECRET - Google OAuth secret (optional)",
        "GITHUB_CLIENT_ID - GitHub OAuth client ID (optional)",
        "GITHUB_CLIENT_SECRET - GitHub OAuth secret (optional)",
      ],
    },
    tags: [
      "auth",
      "security",
      "oauth",
      "login",
      "mfa",
      "jwt",
      "authentication",
    ],
  },
  {
    name: "Docs Assistant",
    slug: "docs-assistant",
    description:
      "Plug-and-play AI documentation assistant that answers user queries by extracting keywords, searching your docs, and generating natural language responses. Zero configuration, fully production-ready.",
    category: "AI",
    installCommand: "npm install @agentverse/docs-assistant",
    usageExample: `import { DocsAssistant } from '@agentverse/docs-assistant';

  function App() {
    const docs = [
      { id: 1, title: "Getting Started", content: "How to install and initialize..." },
      { id: 2, title: "API Reference", content: "All API methods and parameters..." }
    ];

    return (
      <DocsAssistant
        documents={docs}
        maxResponseLength={300}
        onAnswer={(response) => console.log(response)}
        aiProvider={{
          model: "gpt-4.1-mini",
          apiKey: process.env.OPENAI_API_KEY
        }}
      />
    );
  }`,
    features: [
      "🤖 Natural language documentation search",
      "🧠 Automatic keyword extraction",
      "📚 Semantic + keyword-based doc search",
      "📝 LLM-powered summarization",
      "⚙️ Zero setup required",
      "📡 Works offline with local docs",
      "⚡ Fast, production-ready performance",
      "🔌 One-line integration"
    ],
    apiDocs: `AI-powered documentation assistant with an automated pipeline:

  **Pipeline Flow:**
  1. User Query →  
  2. Keyword Extraction →  
  3. Document Search (semantic + lexical) →  
  4. LLM Summary →  
  5. Final Natural Language Response  

  **Features:**
  - Automatic keyword extraction
  - Embedding-based semantic search
  - Chunking & relevance ranking
  - LLM answer synthesis with citations
  - Supports multiple AI providers (OpenAI, Anthropic, Gemini)
  - Customizable max token/response limits
  - Local or remote documentation indexing

  **Integration:**
  - Provide an array of documentation objects: [{ id, title, content, tags }]
  - Configure AI provider credentials
  - Optional: custom ranking, custom extractor, custom summarizer`,
    configuration: {
      environmentVariables: [
        "OPENAI_API_KEY - API key for LLM responses (if using OpenAI)",
        "ANTHROPIC_API_KEY - optional for Anthropic models",
        "GEMINI_API_KEY - optional for Google models"
      ]
    },
    tags: ["docs", "assistant", "ai", "search", "llm", "support", "documentation"]
  }

];

export const categories = Array.from(
  new Set(agents.map((agent) => agent.category))
);
