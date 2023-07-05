import { Footer } from "_components/Organisms";

const Layout = ({ children }) => {
  return (
    <>
      <div className="body">{children}</div>
      <Footer />
    </>
  );
};
export default Layout;
