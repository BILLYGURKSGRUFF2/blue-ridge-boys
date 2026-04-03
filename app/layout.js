import {
  Plus_Jakarta_Sans,
  Cormorant_Garamond,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  title: "Blue Ridge Boys | Same-Day Junk Removal",
  description:
    "Fast, affordable junk removal across the Blue Ridge region. Same-day pickup available. Free estimates, transparent pricing. Licensed & insured.",
  keywords: [
    "junk removal",
    "Blue Ridge",
    "Roanoke",
    "Salem",
    "same-day junk removal",
    "furniture removal",
    "appliance removal",
    "estate cleanout",
    "Virginia",
  ],
  openGraph: {
    title: "Blue Ridge Boys | Same-Day Junk Removal",
    description:
      "We haul it all — furniture, appliances, yard waste, and more. Same-day pickup. Free estimates.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${cormorant.variable} ${ibmMono.variable}`}
    >
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
