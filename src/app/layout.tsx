import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "./lib/regitstry";


export const metadata: Metadata = {
  title: "어바웃 이트",
  description: "당신이 생각하는 그것에 대한 모든 것",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <StyledComponentsRegistry>
          <body>{children}</body>
        </StyledComponentsRegistry>
    </html>
  );
}
