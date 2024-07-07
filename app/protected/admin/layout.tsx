import Navbar from '@/components/Dashboard/NavBar';
import Sidebar from '@/components/Dashboard/Sidebar';
import { Toaster } from "@/components/ui/toaster";


export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Navbar />       <div className='flex'>
         <div className='hidden md:block h-[100vh] w-[300px]'>
           <Sidebar />
         </div>
         <div className='p-5 w-full md:max-w-[1140px]'>{children}</div>
       </div>
       <Toaster/>
      </section>
    )
  }