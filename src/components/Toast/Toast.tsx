import { ToastContainer } from 'react-toastify'

const Toast = () => {
  return (
    <ToastContainer
      data-testid="toast"
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  )
}

export default Toast
