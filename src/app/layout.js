import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight:['400','500','700'],subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme = "light">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
