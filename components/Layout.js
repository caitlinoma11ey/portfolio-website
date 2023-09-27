import Navbar from "./navigation/Navbar";
import Footer from "./navigation/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}