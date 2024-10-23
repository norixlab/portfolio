import type { Metadata } from "next";
import { Play } from "next/font/google";
import "./styles/globals.css";

import { getCldOgImageUrl } from "next-cloudinary";
import Footer from "../components/footer";
import Header from "../components/header";

const play = Play({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const publicId = "images/code";
// const headline = "High-Performance Image & Video Delivery at Scale in Next.js"  ;
   const headline = "E-commerce projects\, admin panels\, integrations with payment systems" ;
// `"Full stack веб-разработчик. Опыт создания современных веб-приложений с использованием Next.js, React, Node.js и ORM (Prisma, Mongoose). Проекты включают электронную коммерцию, админ-панели, интеграции с платежными системами и другие. Узнайте больше о моих навыках и опыте в веб-разработке."`;


// "Портфолио full stack разработчика: Next.js, React, Node.js, Prisma, Mongoose. Проекты электронной коммерции, админ-панели, интеграции с платежными системами."
const tagline = "Sergey Taydakov";
const phone = "+374 (95) 35-38-37"
const logoPublicId = "images/cmty3ca6n39ofutxnyi1";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Full stack web developer. Experience building modern web applications using Next.js, React, Node.js and ORM (Prisma, Mongoose). Projects include e-commerce, admin panels, payment system integrations and others. Learn more about my skills and experience in web development.",

  openGraph: {
    images: [
      {
        // Prefer a different size? Be sure to update the width and height of the
        // metadata as well as the image configuration of getCldOgImageUrl
        width: 1200,
        height: 630,
        url: getCldOgImageUrl({
          src: publicId,
          effects: [
            {
              background: "rgb:0a0a0a",
            },
            {
              color: "rgb:2A005F",
              colorize: "100",
            },
            {
              gradientFade: "symmetric",
            },
          ],
          overlays: [
            {
              publicId,
              width: 1200,
              height: 630,
              crop: "fill",
              effects: [{ opacity: 30 }],
            },
            {
              width: 1000,
              crop: "fit",
              text: {
                color: "white",
                fontFamily: "Play",
                fontSize: 58,
                fontWeight: "bold",
                lineSpacing: 10,

                text: headline,
              },
              position: {
                x: 100,
                y: 100,
                gravity: "north_west",
              },
            },
            {
              publicId,
              width: 1000,
              height: 2,
              effects: [
                {
                  colorize: "100,co_white",
                  opacity: 70,
                },
              ],
              position: {
                x: 100,
                y: 175,
                gravity: "south_west",
              },
            },
            {
              width: 60,
              crop: "fit",
              publicId: logoPublicId,
              position: {
                x: 100,
                y: 92,
                gravity: "south_west",
              },
            },
            {
              text: {
                color: "white",
                fontFamily: "Lato",
                fontSize: 40,
                fontWeight: "bold",
                text: tagline,
              },
              position: {
                x: 180,
                y: 100,
                gravity: "south_west",
              },
            },
            {
              text: {
                color: "white",
                fontFamily: "Lato",
                fontSize: 40,
                fontWeight: "bold",
                text: phone,
              },
              position: {
                x: 750,
                y: 100,
                gravity: "south_west",
              },
            },
          ],
        }),
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${play.className} antialiased bg-background overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
