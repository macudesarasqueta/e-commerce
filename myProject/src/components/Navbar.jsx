import CartWidget from './CartWidget';

export default function Navbar () {
    return (
        <nav>
            <div>
                <div>
                    <img src="/images/Untitled design.png" width={30} alt="logo" />
                    <a href="#" className="hover:text-gray-400"></a>
                </div>

                {/* Links */}
                <div className="hidden md:flex space-x-6">
                <a href="#" className="hover:text-gray-400">
                    Mates
                </a>
                <a href="#" className="hover:text-gray-400">
                    Bombillas
                </a>
                <a href="#" className="hover:text-gray-400">
                    Yerberas
                </a>
                <a href="#" className="hover:text-gray-400">
                    Combos
                </a>
                </div>
                <CartWidget/>
            </div>
        </nav>   
    );
};