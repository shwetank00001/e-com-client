import React from 'react'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createData } from '../actions/data'

const NewItem = () => {

    const dispatch = useDispatch()


    const [data, setData] = React.useState({
        title: "",
        description: "",
        selectedFile: "",

    })

    function handleSubmit(e){
        e.preventDefault()
        console.log(data)
        dispatch(createData(data))
        console.log("IMG DATA")
        console.log(data.selectedFile   )
    }
  return (
    <div>
        <h3>Add a new item to the db</h3>

        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='text' placeholder='Add item title' value={data.title} onChange={(e) => setData({...data, title:e.target.value})} />
            <label>Desc</label>
            <input type='text' placeholder='Add item desc' value={data.description} onChange={(e) => setData({...data, description:e.target.value })} />
            <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setData({...data, selectedFile:base64})} /></div>

            <button>Submit</button>
        </form>
    </div>
  )
}

export default NewItem