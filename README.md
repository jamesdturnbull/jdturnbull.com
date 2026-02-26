# JD Turnbull - AI Consulting Website

A modern Next.js 14 website for AI consulting services, built with TypeScript, Tailwind CSS, and MDX for blog content.

## Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Blog System**: MDX-powered blog with frontmatter support
- **Newsletter**: Resend integration for newsletter subscriptions
- **Contact Form**: Resend-powered contact form
- **SEO Optimized**: Dynamic sitemaps, meta tags, and structured data
- **Responsive Design**: Mobile-first design that works on all devices
- **Performance**: Optimized for Core Web Vitals and fast loading

## Quick Start

1. **Clone and install**:
   ```bash
   git clone <repository-url>
   cd jdturnbull.com
   npm install
   ```

2. **Environment setup**:
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your Resend API key
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env.local` file with:

```bash
# Resend API Configuration
RESEND_API_KEY=your_resend_api_key_here

# Site Configuration  
NEXT_PUBLIC_SITE_URL=https://jdturnbull.com
```

## Project Structure

```
├── app/                    # Next.js 14 App Router pages
│   ├── (pages)/           # Route groups
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   └── globals.css        # Global styles
├── components/            # React components
├── content/blog/          # MDX blog posts
├── lib/                   # Utility functions
└── public/               # Static assets
```

## Content Management

### Adding Blog Posts

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter:
   ```yaml
   ---
   title: "Your Post Title"
   date: "2026-02-25"
   excerpt: "Brief description"
   sector: "restaurants" # Optional: for industry-specific content
   ---
   ```
3. Write content in Markdown/MDX format
4. The post will automatically appear in the blog list

### Supported Sectors

Blog posts can be tagged with sectors for better organization:
- `restaurants`
- `law-firms` 
- `dental-practices`
- `estate-agents`
- `general`

## API Routes

- `/api/newsletter` - Newsletter subscription (Resend Audiences API)
- `/api/contact` - Contact form submission (Resend Email API)

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Build

```bash
npm run build
npm run start
```

## Email Setup

This site uses Resend for email functionality:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add it to your environment variables
4. Verify your domain in Resend for production use

### Newsletter Setup

The newsletter uses Resend Audiences. There's a "General" audience pre-configured, but you can:
1. Create a new audience called "Weekly AI Roundup"
2. Update the `AUDIENCE_ID` in `/app/api/newsletter/route.ts`

## Customization

### Styling

- Primary colors defined in `tailwind.config.js`
- Global styles in `app/globals.css`
- Component-specific styles use Tailwind classes

### Content

- Update company information in components and pages
- Modify service offerings in `/app/services/page.tsx`
- Update about content in `/app/about/page.tsx`

## Performance

The site is optimized for performance:
- Static generation where possible
- Optimized images and fonts
- Minimal JavaScript bundle
- Fast MDX rendering

## SEO

SEO is handled automatically:
- Dynamic sitemap generation
- Meta tags on all pages
- Open Graph tags for social sharing
- Structured data for blog posts

## Support

For technical issues or questions about the codebase, contact the development team.
For content or business questions, contact James directly.

## License

All rights reserved. This is proprietary software for JD Turnbull's business website.