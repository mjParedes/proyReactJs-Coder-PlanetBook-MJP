import Swal from "sweetalert2"

export const swalMsg= () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      title: "BIENVENIDO A PLANET BOOK",
      text: "¡Gracias por elegirnos!",
      color: "blue",
    });
  
}

export const swalCart = (conteo) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "center-right",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: `¡¡GENIAL!!`,
    text: `Has agregado ${conteo} articulos al carrito`,
    color:"green"
  });
};