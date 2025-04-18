export const Menu = () => {
    return (
        <nav className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
            <span className="text-white">Menu</span>
        </div>
        <ul className="flex flex-col gap-2">
            <li className="text-white">Home</li>
            <li className="text-white">About</li>
            <li className="text-white">Contact</li>
        </ul>
        </nav>
    );
    }
export default Menu;