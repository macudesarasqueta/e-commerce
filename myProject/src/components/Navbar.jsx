import CartWidget from './CartWidget';


export default function Navbar () {
    return (
        <nav>
            <img src="/images/Untitled design.png" width={30} alt="logo" />
            <li style = {{display: 'inline-block'}}>
                <a href="">&nbsp;Inicio </a>
                <a href="">Mates </a>
                <a href="">Bombillas </a>
                <a href="">Yerberas</a>
            </li>
            <CartWidget/>
        </nav>
    );
};