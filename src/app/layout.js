import "./globals.css";
import "./app.css";

import dynamic from "next/dynamic";

 const  MobileFooter = dynamic(()=>import("./partails/MobileFooter"),{
  ssr:false
   
 })

export const metadata = {
  title: "Tattoo Admin",
  description: "Tattoo Admin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        style={{ backgroundColor: "#f2f4f5", overflowX: "hidden" }}
        className="custom-scrollbar p-3 mb-16 sm:mb-0"
      >
        {children}
        <MobileFooter />
      </body>
    </html>
  );
}

RootLayout.loading = null;
