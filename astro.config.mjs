import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.crewcut.in',
  integrations: [
    starlight({
      title: 'CrewCut Docs',
      logo: {
        src: './src/assets/crewcut-logo.png',
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Overview', slug: 'getting-started/overview' },
            { label: '3-Minute Quickstart', slug: 'getting-started/quickstart' },
            { label: 'Supported Video Formats', slug: 'getting-started/supported-formats' },
          ],
        },
        {
          label: 'Creator Guide',
          items: [
            { label: 'Uploading Videos', slug: 'creator-guide/uploading-videos' },
            { label: 'Folders & Library', slug: 'creator-guide/library-and-folders' },
            { label: 'Sharing Review Links', slug: 'creator-guide/sharing-cuts' },
            { label: 'Companion Assets (Drive)', slug: 'creator-guide/companion-assets' },
            { label: 'Direct Video Downloads', slug: 'creator-guide/direct-downloads' },
            { label: 'Managing Comments', slug: 'creator-guide/managing-feedback' },
            { label: 'Shared Folders & Uploads', slug: 'creator-guide/shared-folders' },
          ],
        },
        {
          label: 'Reviewer Guide (Zero Login)',
          items: [
            { label: 'Reviewing a Video Cut', slug: 'reviewer-guide/reviewing-a-cut' },
            { label: 'Voice Notes & Visual Drawing', slug: 'reviewer-guide/voice-notes-and-annotations' },
            { label: 'Timestamped Feedback', slug: 'reviewer-guide/timestamped-feedback' },
            { label: 'Email Update Alerts', slug: 'reviewer-guide/email-notifications' },
          ],
        },
        {
          label: 'Integrations & Plugins',
          items: [
            { label: 'Adobe Premiere Pro & After Effects', slug: 'integrations/adobe-plugins' },
          ],
        },
        {
          label: 'Storage & Bandwidth',
          items: [
            { label: 'Understanding Quotas', slug: 'storage-bandwidth/understanding-quotas' },
            { label: 'Storage Add-on Packs', slug: 'storage-bandwidth/storage-addons' },
            { label: 'Delivery Limits & Protection', slug: 'storage-bandwidth/delivery-limits' },
          ],
        },
        {
          label: 'Plans & Billing',
          items: [
            { label: 'Pricing Plans (INR)', slug: 'plans-invoices/pricing-plans' },
            { label: 'Payment & Checkout', slug: 'plans-invoices/payment-and-checkout' },
            { label: 'GST Invoices & Receipts', slug: 'plans-invoices/gst-invoices' },
          ],
        },
        {
          label: 'Troubleshooting & FAQ',
          items: [
            { label: 'Upload & Download Issues', slug: 'troubleshooting/upload-issues' },
            { label: 'Playback & Buffering', slug: 'troubleshooting/playback-buffering' },
            { label: 'Security & Privacy', slug: 'troubleshooting/security-and-privacy' },
          ],
        },
        {
          label: 'Launch App',
          link: 'https://app.crewcut.in',
          attrs: { target: '_blank', rel: 'noopener noreferrer' },
        },
      ],
    }),
  ],
});
