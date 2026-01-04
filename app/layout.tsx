import CSSProvider from "./components/CSSProvider";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/index";
import "./globals.css";

export const metadata = {
  title: "ClickInvoice",
  description: "The powerful invoice generation app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CSSProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
