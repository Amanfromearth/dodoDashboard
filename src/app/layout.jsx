import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import LeftBar from "@/sections/LeftBar/LeftBar";
import RightBar from "@/sections/RightBar/RightBar";
import CentereNav from "@/sections/CenterSection/components/CentereNav";
import { Toaster } from "@/components/ui/sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "dodo-dash",
  description: "Made by Anurag",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="w-full h-screen bg-background dark:bg-[#2a2a2a] p-3 flex flex-row items-center justify-center">
            <LeftBar />
            <section className="w-full h-full overflow-auto flex flex-col">
              <CentereNav />
              {children}
            </section>
            <RightBar />
          </main>
          <Toaster className="bg-white" />
        </ThemeProvider>
      </body>
    </html>
  );
}
