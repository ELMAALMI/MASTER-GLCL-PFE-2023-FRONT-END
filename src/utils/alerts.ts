import Swal from 'sweetalert2';

export const SuccessAlert = (message: string, title: string) => {
    Swal.fire({
        title,
        text: message,
        timer: 5000,
        icon: 'success'
    });
};
export const ErrorAlert = (message: string, title: string) => {
    Swal.fire({
        title,
        text: message,
        timer: 5000,
        icon: 'error'
    });
};
