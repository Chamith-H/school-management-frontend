import Swal from "sweetalert2";

const ErrorMessage = (message: string) => {
  return Swal.fire({
    title: "Done",
    text: message,
    icon: "error",
  });
};

export default ErrorMessage;
