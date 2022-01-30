import Producto from "./Producto"

const styles = {
  productos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}

const Productos = (props) => {
  const { productos, agregarAlCarro } = props
  return (
    <div style={styles.productos}>
      {productos.map(producto => 
        <Producto
          agregarAlCarro={agregarAlCarro}
          key={producto.name}
          producto={producto}
        />)}
    </div>
  )
}

export default Productos