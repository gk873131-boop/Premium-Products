import { StrictMode, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';
import Loading from './components/common/Loading.jsx';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const AboutUs = lazy(() => import('./pages/About/AboutUs.jsx'));
const OurMission = lazy(() => import('./pages/About/OurMission.jsx'));
const OurVision = lazy(() => import('./pages/About/OurVision.jsx'));
const Categories = lazy(() => import('./pages/Products/Categories.jsx'));
const ProductList = lazy(() => import('./pages/Products/ProductList.jsx'));
const ProductDetail = lazy(() => import('./pages/Products/ProductDetail.jsx'));
const ContactUs = lazy(() => import('./pages/Contact/ContactUs.jsx'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery.jsx'));
const Videos = lazy(() => import('./pages/Gallery/Videos.jsx'));
const FAQ = lazy(() => import('./pages/Misc/FAQ.jsx'));
const Testimonials = lazy(() => import('./pages/Misc/Testimonials.jsx'));
const News = lazy(() => import('./pages/Misc/News.jsx'));
const FeaturedProducts = lazy(() => import('./pages/Products/FeaturedProducts.jsx'));
const HotProducts = lazy(() => import('./pages/Products/HotProducts.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/Legal/PrivacyPolicy.jsx'));
const TermsConditions = lazy(() => import('./pages/Legal/TermsConditions.jsx'));
const LegalDisclaimer = lazy(() => import('./pages/Legal/LegalDisclaimer.jsx'));
const Sitemap = lazy(() => import('./pages/Misc/Sitemap.jsx'));
const NotFound = lazy(() => import('./pages/Misc/NotFound.jsx'));

function App() {
  return (
    <StrictMode>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-mission" element={<OurMission />} />
            <Route path="/our-vision" element={<OurVision />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/news" element={<News />} />
            <Route path="/featured-products" element={<FeaturedProducts />} />
            <Route path="/hot-products" element={<HotProducts />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
            <Route path="/sitemap" element={<Sitemap />} />

            <Route path="/air-handling-units" element={<ProductList category="air-handling-units" />} />
            <Route path="/coils" element={<ProductList category="coils" />} />
            <Route path="/dx-coil" element={<ProductList category="dx-coil" />} />
            <Route path="/ec-fans" element={<ProductList category="ec-fans" />} />
            <Route path="/heat-recovery-units-with-vrf-condenser" element={<ProductList category="heat-recovery-units-with-vrf-condenser" />} />
            <Route path="/heat-exchangers" element={<ProductList category="heat-exchangers" />} />
            <Route path="/dehumidifiers" element={<ProductList category="dehumidifiers" />} />

            <Route path="/custom-air-handling-units" element={<ProductDetail slug="custom-air-handling-units" />} />
            <Route path="/air-handling-units-with-vrf-condenser" element={<ProductDetail slug="air-handling-units-with-vrf-condenser" />} />
            <Route path="/rooftop-air-handling-units" element={<ProductDetail slug="rooftop-air-handling-units" />} />
            <Route path="/floor-mounted-air-handling-units" element={<ProductDetail slug="floor-mounted-air-handling-units" />} />
            <Route path="/vertical-air-handling-units" element={<ProductDetail slug="vertical-air-handling-units" />} />
            <Route path="/ceiling-suspended-fan-coil-units" element={<ProductDetail slug="ceiling-suspended-fan-coil-units" />} />
            <Route path="/co2-coils" element={<ProductDetail slug="co2-coils" />} />
            <Route path="/evaporator-coils" element={<ProductDetail slug="evaporator-coils" />} />
            <Route path="/condenser-coils" element={<ProductDetail slug="condenser-coils" />} />
            <Route path="/hot-water-and-chilled-water-coils" element={<ProductDetail slug="hot-water-and-chilled-water-coils" />} />
            <Route path="/steam-coils" element={<ProductDetail slug="steam-coils" />} />
            <Route path="/micro-channel-coils" element={<ProductDetail slug="micro-channel-coils" />} />
            <Route path="/dx-coil-with-vrf-condenser-suppliers" element={<ProductDetail slug="dx-coil-with-vrf-condenser-suppliers" />} />
            <Route path="/355-1-8kw-3ph" element={<ProductDetail slug="355-1-8kw-3ph" />} />
            <Route path="/355-650w-1ph" element={<ProductDetail slug="355-650w-1ph" />} />
            <Route path="/450-1-8kw-3ph" element={<ProductDetail slug="450-1-8kw-3ph" />} />
            <Route path="/560-3-6kw-3ph" element={<ProductDetail slug="560-3-6kw-3ph" />} />
            <Route path="/shell-tube-condenser" element={<ProductDetail slug="shell-tube-condenser" />} />
            <Route path="/stainless-steel-coil" element={<ProductDetail slug="stainless-steel-coil" />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </StrictMode>
  );
}

export default App;
