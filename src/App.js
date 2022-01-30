import { useState } from 'react';
import Navbar from './components/Navbar'
import Title from './components/Title'
import Layout from './components/Layout'
import Productos from './components/Productos'
import './App.css';

function App() {
  
  const [carro, setCarro] = useState([])

  const [carroVisible, setCarroVisible] = useState(false)

  const productos = [
    { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg'},
    { name: 'Arvejas', price: 2500, img: '/productos/arvejas.jpg'},
    { name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg'}
  ]

  const agregarAlCarro = (producto) => {
    if (carro.find(prod => prod.name === producto.name)) {
      const newCarro = carro.map(prod => prod.name === producto.name
        ? ({
          ...prod,
          cantidad: prod.cantidad + 1
        })
        : prod)
      return setCarro(newCarro)
    } 
    return setCarro(carro.concat({
        ...producto,
        cantidad: 1
    }))
  }

  const mostrarCarro = () => {
    if (carro.length) {
      setCarroVisible(!carroVisible)
    }
  }

  return (
    <div>
      <Navbar 
        carro={carro} 
        mostrarCarro={mostrarCarro}
        esCarroVisible={carroVisible} />
      <Layout>
        <Title />
        <Productos 
          productos={productos}
          agregarAlCarro={agregarAlCarro}/>
      </Layout>
    </div>
  );
}

export default App;
