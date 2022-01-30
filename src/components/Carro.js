import BubbleAlert from "./BubbleAlert"
import DetallesCarro from "./DetallesCarro"

const styles = {
  carro: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer'
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20
  }
}

const Carro = (props) => {
  const { esCarroVisible, mostrarCarro, carro } = props
  const cantidad = carro.reduce((acc, element) => acc + element.cantidad, 0)
  return (
    <div>
      {/*console.log('carro en carro', carro)*/}
      <span style={styles.bubble}>
        {cantidad > 0
          ? <BubbleAlert value={cantidad} />
          : null}
      </span>
      <button style={styles.carro} onClick={() => mostrarCarro()}>
        Carro
      </button>
      {esCarroVisible
        ? <DetallesCarro 
            carro={carro}/>
        : null}
    </div>
  )
}

export default Carro