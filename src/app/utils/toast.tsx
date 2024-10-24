// toastStyles.js
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const contextClass = {
    success: "bg-white border-10 border-blue-400",
    error: "bg-white border-1 border-blue",
    info: "bg-white border-1 border-blue",
    warning: "bg-white border-1 border-blue",
    default: "bg-white border-1 border-blue",
    dark: "bg-white bg-white-600 font-gray-300",
  };


export default function Toaster() {
  return (
      <ToastContainer
        toastClassName={(context) => 
          contextClass[context?.type || "default"] +
          " relative flex p-2 text-sigblue min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={() => "flex items-center justify-center text-sm font-white block p-3"}
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        closeButton={false}
      />
  );
};

export { Toaster, toast };