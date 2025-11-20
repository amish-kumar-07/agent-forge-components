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
  // New optional fields for dynamic links
  npmUrl?: string;
  docsUrl?: string;
}

export const agents: Agent[] = [
  {
    name: "Email Agent",
    slug: "email-agent",
    description: "Complete email sending solution for Next.js with Resend integration. Pre-built UI component, server-side API routes, and secure email delivery. Perfect for transactional emails, notifications, and contact forms.",
    category: "Communication",
    installCommand: "npx @theagentverse/email-agent-cli init",
    npmUrl: "https://www.npmjs.com/package/@theagentverse/email-agent-cli",
    docsUrl: "https://resend.com/docs",
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
    name: "PayPal Payment Agent",
    slug: "paypal-payment-agent",
    description: "Production-ready PayPal integration for Next.js with pre-built pricing UI. Includes secure server-side processing, automatic payment capture, and supports international transactions. Setup in minutes with CLI scaffolding.",
    category: "Commerce",
    installCommand: "npx @theagentverse/paypal-agent-cli init",
    npmUrl: "https://www.npmjs.com/package/@theagentverse/paypal-agent-cli",
    docsUrl: "https://developer.paypal.com/docs/api/overview/",
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
    name: "Chatbot Agent",
    slug: "chatbot-agent",
    description:
      "Plug-and-play AI chatbot assistant for Next.js. Extracts keywords, searches your documentation, and generates natural language answers. Zero configuration and fully production-ready.",
    category: "AI",
    installCommand: "npx @theagentverse/chatbot-agent-cli init",
    npmUrl: "https://www.npmjs.com/package/@theagentverse/chatbot-agent-cli",
    docsUrl: "https://ai.google.dev/gemini-api/docs",
    usageExample: `import React from "react";
import Chatbot from "@/component/Chatbot";

export default function Page() {
  return (
    <div>
      <Chatbot />
    </div>
  );
}`,

    features: [
      "🤖 AI-powered chatbot for documentation & FAQ queries",
      "🧠 Automatic keyword extraction",
      "📚 Intelligent documentation search",
      "📝 LLM-powered natural language responses",
      "⚙️ Zero configuration required",
      "📡 Runs fully on your Next.js API routes",
      "⚡ Fast, production-ready performance",
      "🔌 Simple drop-in component (<Chatbot />)",
    ],

    apiDocs: `AI chatbot pipeline for answering documentation, FAQs, and support queries:

**Pipeline Flow:**
1. User Question  
2. Keyword Extraction  
3. Documentation Search  
4. LLM Answer Generation  
5. Final Response Returned to UI  

**Features:**
- Automated keyword extraction via API route
- Local text/document search
- LLM response generation with Gemini or OpenAI
- Customizable max token/response limits
- Modular API route structure:
  - /api/extract-keywords
  - /api/search-docs
  - /api/generate-answer
- Works with any text-based documentation dataset
- Fully compatible with Next.js App Router

**Integration:**
- Import and use the Chatbot UI component
- Store documentation files locally or fetch dynamically
- Configure your API key inside \`.env.local\`
`,

    configuration: {
      environmentVariables: [
        "GEMINI_API_KEY - Required for Gemini LLM responses",
        "OPENAI_API_KEY - Optional alternative for OpenAI models",
      ],
    },

    tags: ["chatbot", "assistant", "ai", "nextjs", "docs", "support", "llm"],
  },
];

export const categories = Array.from(
  new Set(agents.map((agent) => agent.category))
);