export const metadata = {
  title: "realiser.ai",
  description: "Vi hjelper virksomheter å realisere verdien av AI – gjennom små, målbare og menneskelige steg som faktisk tas i bruk.",
};

import "./../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
