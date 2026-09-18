import Sidebar from "./Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Sidebar stays mounted */}
      <Sidebar />

      {/* Page Content */}
      <main className="ml-64 min-h-screen">
        {children}
      </main>

    </div>
  );
}