import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
		  </div>
		  {/* The children that is being passed as the content between the opening
		  and closing DIV brackets is the page.tsx in the same folder or it's subfolders.
		  All layouts apply to sub-layouts */}
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}