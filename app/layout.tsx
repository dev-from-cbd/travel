// Import the 'Metadata' type from the 'next' module.
import type { Metadata } from "next";

// Import global CSS styles for the application.
import "./globals.css";

// Import the 'Navbar' and 'Footer' components from their respective paths.
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Define metadata for the application, including the title and description.
export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App for Camping",
};

// Define the 'RootLayout' component which receives 'children' as props.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Start an HTML document with the language set to English.
    <html lang="en">
      <body>
        // Include the 'Navbar' component at the top of the page.
        <Navbar />
        // Define a 'main' element for the application's content with specific
        styling.
        <main className="relative overflow-hidden">{children}</main>
        // Include the 'Footer' component at the bottom of the page.
        <Footer />
      </body>
    </html>
  );
}
