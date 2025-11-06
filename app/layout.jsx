export const metadata = {
  title: "realiser.ai – AI i praksis",
  description: "Små, trygge og målbare steg som gir faktisk gevinst i arbeidshverdagen.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
