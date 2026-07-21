import { useMeta } from '../../hooks/useCustomHooks.js';
import Breadcrumb from '../../components/common/Breadcrumb.jsx';

export default function TermsConditions() {
  useMeta('default');

  const breadcrumbs = [
    { label: 'Home', path: '/index' },
    { label: 'Terms & Conditions', active: true },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <section className="page-section">
        <div className="container">
          <div className="legal-content">
            <h1>Terms &amp; Conditions</h1>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using the Premium Products website, you accept and agree to be bound by
              these Terms and Conditions. If you do not agree to these terms, please do not use our
              website.
            </p>

            <h2>Use of Website</h2>
            <p>
              You may use our website for lawful purposes only. You agree not to use the website in any
              way that could damage, disable, or impair the website or interfere with any other
              user's use of the website.
            </p>

            <h2>Product Information</h2>
            <p>
              We strive to provide accurate and up-to-date information about our products on this
              website. However, we do not warrant that product descriptions, specifications, or other
              content is accurate, complete, or current. Product availability and specifications are
              subject to change without notice.
            </p>

            <h2>Quotes and Pricing</h2>
            <p>
              All quotes provided by Premium Products are valid for 30 days from the date of issue.
              Prices are subject to change based on material costs, exchange rates, and other factors.
              Confirmed orders will be priced at the quoted rate.
            </p>

            <h2>Orders and Delivery</h2>
            <p>
              Order acceptance is subject to availability and confirmation. Delivery times are
              estimates and may vary based on production schedules and shipping arrangements. We are
              not liable for delays beyond our control.
            </p>

            <h2>Warranty</h2>
            <p>
              Our products are covered by manufacturer warranties. Warranty terms vary by product and
              are provided with each order. Warranty claims must be submitted in writing with proof of
              purchase.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Premium Products shall not be liable for any direct, indirect, incidental, or
              consequential damages arising from the use of our website or products. Our liability is
              limited to the purchase price of the products.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and design elements, is the
              property of Premium Products and is protected by intellectual property laws. You may not
              reproduce or distribute our content without prior written permission.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms and Conditions are governed by the laws of Australia. Any disputes arising
              from these terms shall be resolved in the courts of Australia.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms and Conditions at any time. Changes will be
              posted on this page with an updated revision date.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
