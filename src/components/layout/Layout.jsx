import Header from './Header.jsx';
import Footer from './Footer.jsx';
import BackToTop from '../common/BackToTop.jsx';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="page-content">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
