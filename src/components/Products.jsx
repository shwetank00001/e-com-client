import React from 'react'
import axios from 'axios'


const Products = () => {


  const [ data, setData] = React.useState([])
  const newData = Object.keys(data)

  async function showData(){
    try {
      const result = axios.get('http://localhost:5000/items')
      setData(result)
    } catch (error) {
      console.log(error)
    }
  }


  function show(){
    console.log(typeof(newData))
  }
  React.useEffect(() => {
    showData()
  }, [])

  // const ele = data.map(function(item){
  //   return(
  //     <div key={item.id}>
  //       <h4>{item.title}</h4>
  //       <h4>{item.description}</h4>
  //       <h4>{item.selectedFile}</h4>
  //     </div>
  //   )
  // })

  return (
    <div>
      <h2>The Products are</h2>
      {/* {ele} */}
      <button onClick={show}>click</button>
    </div>
  )
}

export default Products