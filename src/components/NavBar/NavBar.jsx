import CartWidget from "../CartWidget/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light fs-3" href="#">✨ Mi Tienda ✨</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto d-flex align-items-center">
            <li className="nav-item">
              <a className="nav-link active text-light fs-5" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fs-5" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fs-5" href="#">Contacto</a>
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