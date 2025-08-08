import React from 'react'

const FormCheckout = ({dataForm, handleChangeInput, sendOrder}) => {
  return (
    <form onSubmit={sendOrder}>
            <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />

            <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} />

            <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />

            <button type="submit">Enviar Orden</button>
        </form>
  )
}

export default FormCheckout