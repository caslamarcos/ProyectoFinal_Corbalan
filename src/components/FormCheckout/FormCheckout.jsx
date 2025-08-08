import "./FormCheckout.css";

const FormCheckout = ({dataForm, handleChangeInput, sendOrder}) => {
  return (
    <div className="checkout-wrapper">

    <form onSubmit={sendOrder}>
            <h2>CHECKOUT</h2>
            <p>Nombre completo:</p>
            <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />

            <p>Telefono:</p>
            <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} />

            <p>Email:</p>
            <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />

            <button type="submit">Enviar Orden</button>
        </form>
    </div>
  )
}

export default FormCheckout