import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Graphics Card Prices (US)",
  description: "Amazon's Current 100 Bestselling Graphics Cards",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
