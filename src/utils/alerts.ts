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
        timer: 9000,
        icon: 'error'
    });
};

export const ComfireDelete = (msg: string) => {
    return Swal.fire({
        title: msg,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
    });
};
