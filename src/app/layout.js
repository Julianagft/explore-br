
import {Comfortaa} from "next/font/google"
import "./globals.css";

const comfortaa = Comfortaa({
  weight: ['400','500','600','700'],
  subsets: ['latin'],
})

export const metadata = {
  title: "Explore BR",
  description: "Explorador BR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>{children}</body>
    </html>
  );
}
