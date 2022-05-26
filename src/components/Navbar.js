import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import CartWidget from './CartWidget';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand text-light fontNav" href="">Tienda dudosa</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center py-2" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item px-3">
                            <a className="nav-link text-light fontNav" href="">Tienda</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link text-light fontNav" href="">Galeria</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link text-light fontNav" href="">Quiénes somos</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link text-light fontNav" href="">Devoluciones</a>
                        </li>
                    </ul>
                    <CartWidget></CartWidget>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;