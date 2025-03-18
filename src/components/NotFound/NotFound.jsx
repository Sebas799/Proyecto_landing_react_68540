import Swal from "sweetalert2";

export default function NotFound() {
  Swal.fire({
    title: "¡ERROR 404!",
    text: "Esta pagina no ha sido encontrada, por favor, vuelva a intentar con otra.",
    icon: "error",
    confirmButtonText: "Aceptar"
  });
}

