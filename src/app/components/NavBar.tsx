import Link from "next/link";

const NavBar = () => {
    interface ButtonLinkProps {
        name: string;
        href: string;
    }

    const arr: ButtonLinkProps[] = [
        {
            name: "first file",
            href: "/pages/home"
        },
        {
            name: "login",
            href: "/pages/login"
        },
        {
            name: "services",
            href: "/pages/service"
        },
        {
            name: "contact",
            href: "/pages/contact"
        },
        {
            name: "todos",
            href: "/pages/toDoList"
        },
        {
            name: "todoById",
            href: "/pages/1"
        }
    ];

    return (
        <nav className="bg-blue-500 h-16 flex items-center justify-between px-4">
            <div className="text-white font-bold">my website</div>
            <ul className="flex space-x-4 ">
                {arr.map((item, index) => (
                    <li key={index} className="text-white hover:text-blue-300">
                        <Link href={item.href} >{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;
