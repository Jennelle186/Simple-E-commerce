import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from  '@/components/ui/table';
// https://ui.shadcn.com/docs/components/data-table
//CHECK THE SAMPLE HERE

const OrdersTable = () => {
    return ( 
        <div className='mt-10'>
            <h3 className="text-2xl mb-4 font-semibold"> Orders Table </h3>
            <Table>
                <TableCaption>A List of Recent Orders</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Order Date</TableHead>
                        <TableHead>First Name</TableHead>
                        <TableHead>Last Name</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead>Order Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                </TableBody>
            </Table>
        </div>
     );
}
 
export default OrdersTable;