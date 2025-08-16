import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Evolve Link',
  description: 'Learn about how Evolve Link protects your privacy and handles your personal information.',
  keywords: 'privacy policy, data protection, Evolve Link',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-[#121827] dark:border dark:border-primary rounded-xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-600 dark:text-white leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                fill out a form, or contact us for support.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-600 dark:text-white leading-relaxed mb-4">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, and communicate with you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Data Security
              </h2>
              <p className="text-gray-600 dark:text-white leading-relaxed mb-4">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 dark:text-white leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@evolve-link.com" className="text-primary hover:underline">
                  privacy@evolve-link.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}