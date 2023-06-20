import React from 'react';

const ErrorField: React.FC<{ message?: string }> = ({ message }) => {
    return <span className="text-[15px] mt-1 text-red-500"> {message} </span>;
};
export default ErrorField;
