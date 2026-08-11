import type { Metadata } from "next";
import "./globals.css";
// import localFonts from "next/font/local";

export const metadata: Metadata = {
    title: "Blog Blob",
    description:
        "Meu blogfólio pessoal, onde compartilho meus pensamentos, experiências e aprendizados sobre tecnologia, programação e desenvolvimento web.",
};

// const minhaFonte = localFonts({
//     src: [
//         { path: "./fonts/SofiaSansExtraCondensed-Thin.ttf", weight: "100" },
//         { path: "./fonts/SofiaSansExtraCondensed-ExtraLight.ttf", weight: "200" },
//         { path: "./fonts/SofiaSansExtraCondensed-Light.ttf", weight: "300" },
//         { path: "./fonts/SofiaSansExtraCondensed-Regular.ttf", weight: "400" },
//         { path: "./fonts/SofiaSansExtraCondensed-Medium.ttf", weight: "500" },
//         { path: "./fonts/SofiaSansExtraCondensed-SemiBold.ttf", weight: "600" },
//         { path: "./fonts/SofiaSansExtraCondensed-Bold.ttf", weight: "700" },
//         { path: "./fonts/SofiaSansExtraCondensed-ExtraBold.ttf", weight: "800" },
//         { path: "./fonts/SofiaSansExtraCondensed-Black.ttf", weight: "900" },
//     ],
// });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" className={`h-full antialiased `}>
            <body>{children}</body>
        </html>
    );
}
