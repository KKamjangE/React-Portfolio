import AppSidebar from "@/components/layout/app-sidebar";
import Footer from "@/components/layout/footer";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <main className="flex-1 bg-background">
        {children}
        <Footer />
      </main>
    </SidebarProvider>
  );
}
