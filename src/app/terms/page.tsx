import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Evolve Link',
  description: 'Read the terms and conditions for using Evolve Link services.',
  keywords: 'terms of service, conditions, Evolve Link',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-[#121827] dark:border dark:border-primary rounded-xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Terms of Service
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-600 dark:text-white leading-relaxed mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Use License
              </h2>
              <p className="text-gray-600 dark:text-white leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on Evolve Link&apos;s 
                website for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Disclaimer
              </h2>
              <p className="text-gray-600 dark:text-white leading-relaxed mb-4">
                The materials on Evolve Link&apos;s website are provided on an &apos;as is&apos; basis. 
                Evolve Link makes no warranties, expressed or implied, and hereby disclaims all other warranties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 dark:text-white leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:legal@evolve-link.com" className="text-primary hover:underline">
                  legal@evolve-link.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}