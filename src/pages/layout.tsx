import AppSidebar from "@/components/layout/app-sidebar";
import Footer from "@/components/layout/footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  return (
    <SidebarProvider open={!isMobile}>
      <AppSidebar />
      <main className="flex-1 bg-background">
        {children}
        <Footer />
      </main>
    </SidebarProvider>
  );
}
