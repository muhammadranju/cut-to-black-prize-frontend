import { storage } from "@/lib/storage";
import {
  ChartNoAxesGantt,
  FileText,
  Home,
  LogOut,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const dashboardLinks = [
  { name: "Overview", href: "/dashboard", icon: Home },
  { name: "Submissions", href: "/dashboard/submissions", icon: FileText },
  {
    name: "Invitation Code",
    href: "/dashboard/invitation-code",
    icon: ChartNoAxesGantt,
  },
  { name: "My Account", href: "/dashboard/account", icon: User },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    storage.clearInvitationCode();
    localStorage.removeItem("ctb_payment_status");
    router.push("/");
  };
  return (
    <div>
      {/* Sidebar */}
      <aside
        className={` ${
          isOpen ? "block" : "hidden"
        } md:block w-full h-full md:w-64 bg-card border-r border-accent/20 p-6`}
      >
        <div className="flex justify-between items-center md:hidden mb-6">
          <h2 className="text-2xl font-bold text-accent">Dashboard</h2>
          <button onClick={() => setIsOpen(false)} className="text-accent">
            <X size={24} />
          </button>
        </div>

        <h2 className="text-2xl font-bold text-accent mb-8 hidden md:block">
          Dashboard
        </h2>

        <nav className="space-y-2 mb-8">
          {dashboardLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 px-4 py-3 rounded text-foreground hover:bg-secondary hover:text-accent transition-colors"
              >
                <Icon size={20} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded text-foreground hover:bg-destructive/20 hover:text-destructive transition-colors w-full"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </aside>
    </div>
  );
};

export default Sidebar;
