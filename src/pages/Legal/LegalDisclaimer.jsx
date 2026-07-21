import { useMeta } from '../../hooks/useCustomHooks.js';
import Breadcrumb from '../../components/common/Breadcrumb.jsx';

export default function LegalDisclaimer() {
  useMeta('default');

  const breadcrumbs = [
    { label: 'Home', path: '/index' },
    { label: 'Legal Disclaimer', active: true },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <section className="page-section">
        <div className="container">
          <div className="legal-content">
            <h1>Legal Disclaimer</h1>

            <h2>General Information</h2>
            <p>
              The information provided by Premium Products on this website is for general
              informational purposes only. All information is provided in good faith; however, we make
              no representation or warranty of any kind regarding the accuracy, adequacy, validity,
              reliability, or completeness of any information on this site.
            </p>

            <h2>Professional Advice</h2>
            <p>
              The information on this website is not intended to be a substitute for professional
              engineering or HVAC advice. You should consult with a qualified professional before
              making decisions about your HVAC system requirements.
            </p>

            <h2>Product Performance</h2>
            <p>
              Product performance may vary based on installation conditions, operating environment,
              and maintenance practices. Specifications provided are typical values and may vary
              between units. Actual performance should be verified by a qualified professional.
            </p>

            <h2>External Links</h2>
            <p>
              This website may contain links to external websites that are not provided or maintained
              by Premium Products. We do not guarantee the accuracy or completeness of information on
              external websites.
            </p>

            <h2>No Warranty</h2>
            <p>
              Under no circumstance shall Premium Products be liable for any loss or damage of any
              kind incurred as a result of the use of this website or reliance on any information
              provided. Your use of this website and your reliance on any information is solely at
              your own risk.
            </p>

            <h2>Errors and Omissions</h2>
            <p>
              While we strive to keep information up to date and correct, Premium Products makes no
              representations or warranties of any kind, express or implied, about the completeness,
              accuracy, or reliability of the information contained on this website. Errors and
              omissions may occur.
            </p>

            <h2>Consent</h2>
            <p>
              By using our website, you hereby consent to this legal disclaimer and agree to its
              terms.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
