import Image from "next/image";
import Link from "next/link";
import logo from '../img/logo.jpeg';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

  const adminLinks = [
    {name: 'Profile', href: "/protected/account"},
    {name: 'Category', href: '/protected/admin/category'}

  ]
  


const NavBar = () => {
    return ( 
        <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
            <Link href="/protected/admin">
                <Image src={logo} alt="BookNook Haven Logo" width={40}/>
            </Link>
           

            <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-non">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback className="text-black">CN</AvatarFallback>   
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                
                {adminLinks.map((item,i) => (
                    <Link key={i} href={item.href}>
                        <DropdownMenuItem>{item.name}</DropdownMenuItem>
                    </Link>
                ))}
                <DropdownMenuSeparator />
                <form action="/auth/signout" method="post">
                    <DropdownMenuItem>
                        <Button variant='outline' type="submit">
                            Logout
                        </Button>
                    </DropdownMenuItem>
                </form>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
     );
}
 
export default NavBar;