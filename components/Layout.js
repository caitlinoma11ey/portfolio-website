import Navbar from "./navigation/navbar";
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