import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  Home,
  Briefcase,
  Code,
  BookOpen,
  Award,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Career", href: "#career", icon: Briefcase },
  { label: "TechStack", href: "#tech-stack", icon: Code },
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
  return (
    <Sidebar side="left" collapsible="icon">
      <SidebarHeader className="p-4">
        <h1 className="text-2xl font-bold">Portfolio</h1>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent className="flex-1 flex flex-col justify-between p-4">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                size="lg"
                className="space-x-2 hover:cursor-pointer [&>svg]:size-5"
              >
                <>
                  <item.icon />
                  <span className="text-lg font-semibold">{item.label}</span>
                </>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter className="p-4">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <link.icon className="size-4" />{" "}
            <span className="font-semibold text-foreground">{link.label}</span>
          </a>
        ))}
        <p className="text-muted-foreground text-sm">Last Update: 2025.09</p>
      </SidebarFooter>
    </Sidebar>
  );
}
