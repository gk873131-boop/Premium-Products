import { useMeta } from '../../hooks/useCustomHooks.js';
import Breadcrumb from '../../components/common/Breadcrumb.jsx';

export default function PrivacyPolicy() {
  useMeta('default');

  const breadcrumbs = [
    { label: 'Home', path: '/index' },
    { label: 'Privacy Policy', active: true },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <section className="page-section">
        <div className="container">
          <div className="legal-content">
            <h1>Privacy Policy</h1>

            <h2>Information We Collect</h2>
            <p>
              Premium Products collects information that you provide directly to us, including your
              name, email address, phone number, and any other information you choose to provide when
              contacting us or submitting an enquiry.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to respond to your enquiries, provide product
              information and quotes, process orders, and communicate with you about our products and
              services. We may also use your information to improve our website and services.
            </p>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties
              without your consent. We may share your information with trusted partners who assist us
              in operating our website and conducting our business, provided they agree to keep your
              information confidential.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from
              unauthorized access, alteration, or disclosure. However, no method of transmission over
              the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. Cookies are small files
              stored on your device that help us understand how you use our website and improve its
              functionality. You can control cookies through your browser settings.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information held by us.
              If you wish to exercise these rights, please contact us using the details provided on
              our contact page.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on this
              page with an updated revision date. We encourage you to review this policy periodically.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our privacy policy, please contact us at
              info@premiumproducts.com.au.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
