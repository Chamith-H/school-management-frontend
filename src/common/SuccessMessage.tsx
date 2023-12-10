import Swal from "sweetalert2";

const SuccessMessage = (message: string) => {
  return Swal.fire({
    title: "Done",
    text: message,
    icon: "success",
  });
};

export default SuccessMessage;
