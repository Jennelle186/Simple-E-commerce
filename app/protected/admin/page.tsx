import NavBar from "@/components/NavBar";
import { Suspense } from 'react'

const AdminHomePage = () => {
    return ( 
        <div>
            <Suspense fallback={<p>Loading feed...</p>}>
                <NavBar/>
            </Suspense>
            <h1>Admin Page</h1>
        </div>
     );
}
 
export default AdminHomePage;