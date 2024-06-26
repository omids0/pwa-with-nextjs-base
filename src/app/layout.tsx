import { Metadata } from "next";
import "./globals.css";
// ... other imports

export const metadata: Metadata = {
  manifest: "/manifest.json", // we are accessing our manifest file here
  title: "PWA -p 3007",
  // ... other options
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
