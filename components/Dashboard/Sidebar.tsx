import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import {LayoutDashboard, ListTree, BookOpenText, SquareUser, ShoppingCart, Users, Wrench, CircleUser} from 'lucide-react';
import Link from "next/link";  

interface CommandLink {
    href: string;
    icon: React.ElementType;
    label: string;
}

const commandLinks: CommandLink[] = [
    { href: "/protected/admin", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/protected/admin/genre", icon: ListTree, label: "Genre" },
    { href: "/protected/admin/authors", icon: SquareUser, label: "Authors" },
    { href: "/protected/admin/books", icon: BookOpenText, label: "Books" },
    { href: "/protected/admin", icon: ShoppingCart, label: "Orders" },
    { href: "/protected/admin", icon: Users, label: "Customers" },
];

const settingsLinks: CommandLink[] = [
    { href: "/protected/account", icon: CircleUser, label: "Profile" },
    { href: "/protected/admin", icon: Wrench, label: "Settings"},
]

const SideBar = () => {
    return ( 
        <Command className="bg-secondary rounded-none">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Store Management">
                {commandLinks.map(({ href, icon: Icon, label }) => (
                    <Link key={label} href={href}>
                        <CommandItem>
                            <Icon className="mr-2 h-4 w-4" />
                            {label}
                        </CommandItem>
                    </Link>
                ))}
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    {settingsLinks.map(({ href, icon: Icon, label }) => (
                        <Link key={label} href={href}>
                            <CommandItem>
                                <Icon className="mr-2 h-4 w-4" />
                                {label}
                            </CommandItem>
                        </Link>
                    ))}
                </CommandGroup>
            </CommandList>
            </Command>
     );
}
 
export default SideBar;