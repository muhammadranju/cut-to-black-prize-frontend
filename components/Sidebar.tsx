import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Cookies from "js-cookie";
import {
  ChartNoAxesGantt,
  Cog,
  FileText,
  Home,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const dashboardLinks = [
  { name: "Overview", href: "/dashboard", icon: Menu },
  {
    name: "Invitation Code",
    href: "/dashboard/invitation-code",
    icon: ChartNoAxesGantt,
  },
  { name: "Submissions", href: "/dashboard/submissions", icon: FileText },

  { name: "Settings", href: "/dashboard/account", icon: Cog },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    Cookies.remove("__ACCESS-TOKEN");
    router.push("/login");
  };

  // Function to check if route is active
  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Trigger - Assuming this is placed where needed, e.g., in header */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
            <Menu className="h-4 w-4" />
            <span className="sr-only">Open Dashboard Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[250px] p-0">
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-border">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="lg:block flex flex-col items-center gap-2"
                >
                  <Image
                    src="/logo.png"
                    alt="Cut to Black Prize Logo"
                    width={100}
                    height={100}
                    className="w-12 rounded-full"
                  />
                  <h2 className="text-lg font-bold text-foreground">
                    Cut to Black Prize
                  </h2>
                </Link>
              </div>
            </div>
            <div className="border-b border-border"></div>
            <nav className="flex-1 p-4 space-y-2">
              {dashboardLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.href);
                return (
                  <Button
                    key={link.href}
                    asChild
                    variant={active ? "secondary" : "ghost"}
                    className="justify-start w-full h-auto py-3 px-4"
                  >
                    <Link href={link.href}>
                      <Icon className="mr-3 h-4 w-4" />
                      {link.name}
                    </Link>
                  </Button>
                );
              })}
            </nav>
            <div className="p-4 border-t border-border">
              <Button
                onClick={handleLogout}
                variant="destructive"
                className="w-full"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block fixed left-0 top-0 h-full w-72 bg-background border-r border-border p-6 overflow-y-auto">
        <Link href="/" className="flex  flex-col items-center gap-2">
          <Image
            src="/logo.png"
            alt="Cut to Black Prize Logo"
            width={100}
            height={100}
            className="w-16 rounded-full"
          />
          <h2 className="text-lg font-bold text-foreground mb-8 hover:text-yellow-500 transition-all">
            Cut to Black Prize
          </h2>
        </Link>
        <div className="border-b border-border mb-5"></div>

        <nav className="space-y-2 mb-8 flex-1">
          {dashboardLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);
            return (
              <Button
                key={link.href}
                asChild
                variant={active ? "secondary" : "ghost"}
                className="justify-start w-full h-auto py-3 px-4"
              >
                <Link href={link.href}>
                  <Icon className="mr-3 h-4 w-4" />
                  {link.name}
                </Link>
              </Button>
            );
          })}
        </nav>

        <div className="mt-96">
          <Button
            onClick={handleLogout}
            variant="destructive"
            className="w-full"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
