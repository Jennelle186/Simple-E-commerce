import DashboardCards from "@/components/Dashboard/DashboardCards";
import { BookOpenText, SquareUser, Users, Wallet } from "lucide-react";
import OrdersTable from "@/components/Orders/orderTable";

const AdminHomePage = () => {
    return (
        <div className="flex">
        <div className="p-5 w-full md:max-w-[1140px]">
            <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
                <DashboardCards title="Books" count={120} icon={<BookOpenText className="text-slate-500" size={60}/> }/>
                <DashboardCards title="Authors" count={120} icon={<SquareUser className="text-slate-500" size={60}/> }/>
                <DashboardCards title="Customers" count={120} icon={<Users className="text-slate-500" size={60}/> }/>
                <DashboardCards title="Sales" count={120} icon={<Wallet className="text-slate-500" size={60}/> }/>
                </div>
                <OrdersTable/>
            </div>
        </div>
    )


}
 
export default AdminHomePage;