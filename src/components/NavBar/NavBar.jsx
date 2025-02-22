import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fs-3" to="/">
          ✨ Mi Tienda ✨
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto d-flex align-items-center">
            <li className="nav-item">
              <Link className="nav-link active fs-5" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/category/electronica">
                Electrónica
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/category/ropa">
                Ropa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/contacto">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
