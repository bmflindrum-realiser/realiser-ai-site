export const metadata = {
  title: "realiser.ai – AI i praksis",
  description: "Små, trygge og målbare steg som gir faktisk gevinst i arbeidshverdagen.",
  openGraph: { title: "realiser.ai – AI i praksis", description: "Vi gjør AI praktisk, menneskelig og målbart.", url: "https://realiser.ai", siteName: "realiser.ai", locale: "nb_NO", type: "website" },
};

import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
