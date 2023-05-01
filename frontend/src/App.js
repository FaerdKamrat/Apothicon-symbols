import { useState } from 'react';
import './styles.css'
function App() {
  const [order, updateOrder] = useState([])
  const reset = {
    width : "20%"
  }

  const handleUpdate = e => {
    const {name, value} = e.target
    console.log(name)
    if(e.target.name != "reset"){
      if(order.length > 3) {
        updateOrder([name])
      } else {
        updateOrder([...order, name])
      }
    } else {
      updateOrder([])
    }
  }
  return (
    <div className="container">
      <div className='buttons-container'>
        {["1","2","3","4"].map((item) =><>
        {console.log(item)}
        <button name={item} onClick={handleUpdate}>
          <img src={'/icons/'+item+'.svg'} className='img'/>
        </button>
        </>)}
      </div>

      {order.length > 0 ? 
        <>
          <button className='reset' name="reset" onClick={handleUpdate}>
            <img className='img' src='/on.svg'  style={reset}/> 
          </button>
  
        </>
        : 
        <>
        <div className='reset'>
            <img src='/off.svg' className='img' style={reset}/> 
          </div>
        </>
      }
      

      <div className='select-container'>
        {order.length > 0 ? <>
          <div className='result-img-container'>
            {order.map((item) =><img src={'/icons/selected/'+item+'.svg'} alt='test' className='img'/>)}
          </div>
        </>: <></>}
      </div>
    </div>
  );
}

export default App;
