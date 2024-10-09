import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "./lib/regitstry";
import { ConfirmPopupProvider } from "@/component/comfirm-popup";

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
      <head></head> {/* head 태그 추가 */}
      <body>
        <StyledComponentsRegistry>
          <ConfirmPopupProvider> {/* ConfirmPopupProvider로 감싸기 */}
            {children}
          </ConfirmPopupProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
