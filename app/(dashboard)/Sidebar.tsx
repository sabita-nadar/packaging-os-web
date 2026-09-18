"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }

    return pathname.startsWith(href);
  };

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-gray-200 bg-white">

      {/* Logo */}
      <div className="flex h-[130px] items-center border-b border-gray-200 px-5">

        <Link
          href="/dashboard"
          className="flex items-center gap-3"
        >

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
            <span className="text-xl font-bold text-white">
              P
            </span>
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Packaging<span className="text-blue-600">OS</span>
            </h1>

            <p className="text-sm text-gray-400">
              Content Platform
            </p>
          </div>

        </Link>

      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-6">

        {/* MAIN */}
        <NavSection title="MAIN">

          <NavItem
            href="/dashboard"
            label="Dashboard"
            icon="▦"
            active={isActive("/dashboard")}
          />

        </NavSection>


        {/* CONTENT */}
        <NavSection title="CONTENT">

          <NavItem
            href="/articles"
            label="Articles"
            icon="▤"
            active={isActive("/articles")}
          />

          

        </NavSection>


        {/* ACCOUNT */}
        <NavSection title="ACCOUNT">

          <NavItem
            href="/profile"
            label="Profile"
            icon="○"
            active={isActive("/profile")}
          />

          <NavItem
            href="/settings"
            label="Settings"
            icon="⚙"
            active={isActive("/settings")}
          />

        </NavSection>

      </nav>

      {/* User */}
      <div className="border-t border-gray-200 p-4">

        <Link
          href="/profile"
          className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-50"
        >

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
            SA
          </div>

          <div className="min-w-0">

            <p className="truncate text-sm font-semibold text-gray-900">
              Sabita
            </p>

            <p className="truncate text-xs text-gray-500">
              Administrator
            </p>

          </div>

        </Link>

      </div>

    </aside>
  );
}


/* --------------------------------
   Navigation Section
-------------------------------- */

function NavSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">

      <p className="mb-3 px-3 text-xs font-semibold tracking-wider text-gray-400">
        {title}
      </p>

      <div className="space-y-1">
        {children}
      </div>

    </div>
  );
}


/* --------------------------------
   Navigation Item
-------------------------------- */

function NavItem({
  href,
  label,
  icon,
  active,
}: {
  href: string;
  label: string;
  icon: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex h-12 items-center gap-4 rounded-lg px-4 text-sm font-medium transition-colors ${
        active
          ? "bg-blue-50 text-blue-600"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >

      <span
        className={`flex w-5 items-center justify-center text-base ${
          active
            ? "text-blue-600"
            : "text-gray-500"
        }`}
      >
        {icon}
      </span>

      <span>{label}</span>

    </Link>
  );
}