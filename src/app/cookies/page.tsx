import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy - Evolve Link',
  description: 'Learn about how Evolve Link uses cookies to enhance your browsing experience.',
  keywords: 'cookies, privacy, data protection, Evolve Link',
};

export default function CookiePage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-[#121827] dark:border dark:border-primary rounded-xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Cookie Policy
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                What are Cookies?
              </h2>
              <p className="text-gray-600 dark:text-white leading-relaxed mb-4">
                Cookies are small text files that are stored on your computer or mobile device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Essential Cookies
              </h2>
              <p className="text-gray-600 dark:text-white leading-relaxed mb-4">
                These cookies are necessary for the website to function properly. They enable basic functionality 
                like page navigation and access to secure areas of the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Analytics Cookies
              </h2>
              <p className="text-gray-600 dark:text-white leading-relaxed mb-4">
                These cookies help us understand how visitors interact with our website by collecting 
                and reporting information anonymously.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Managing Cookies
              </h2>
              <p className="text-gray-600 dark:text-white leading-relaxed mb-4">
                You can control and manage cookies in various ways. Most browsers allow you to refuse cookies 
                or delete cookies that have already been set.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 dark:text-white leading-relaxed">
                If you have any questions about our Cookie Policy, please contact us at{' '}
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
