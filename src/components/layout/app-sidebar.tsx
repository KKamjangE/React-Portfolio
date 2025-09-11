import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  useSidebar,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import {
  Briefcase,
  BookOpen,
  Award,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const navItems = [
  { label: "Career", href: "#career", icon: Briefcase },
  { label: "Project", href: "#project", icon: BookOpen },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Certificate", href: "#certificate", icon: Award },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kkamjange/",
    icon: Linkedin,
  },
  { label: "Github", href: "https://github.com/KKamjangE", icon: Github },
  { label: "Email", href: "mailto:ajm980718@gmail.com", icon: Mail },
];

export default function AppSidebar() {
  const { isMobile } = useSidebar();
  return (
    <Sidebar side="left" collapsible="icon" mobileBehavior="icon">
      <SidebarHeader className="md:px-4 pt-6">
        {isMobile ? (
          <Avatar>
            <AvatarImage src="/favicon.ico" />
            <AvatarFallback>App Logo</AvatarFallback>
          </Avatar>
        ) : (
          <h1 className="text-3xl text-muted font-bold">Portfolio</h1>
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    type="button"
                    className="space-x-2 hover:cursor-pointer transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(item.href);
                      if (element) {
                        (element as HTMLElement).scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                        window.history.pushState(null, "", item.href);
                      }
                    }}
                  >
                    <item.icon />
                    <span className="text-xl font-semibold">{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mb-4">
        <SidebarMenu>
          {socialLinks.map((link) => (
            <SidebarMenuItem key={link.label}>
              <SidebarMenuButton asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="size-4" />
                  <span className="text-muted transition-all hover:underline hover:text-primary">
                    {link.label}
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
