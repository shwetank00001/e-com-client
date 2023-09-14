import React, { useState } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createData } from '../actions/data'
import './NewItem.css'

const NewItem = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    title: '',
    description: '',
    selectedFile: '',
  });

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(createData(data))
  }

  return (
    <div className="new-item-container">
      <h3 className="new-item-heading">Add a new item to the database</h3>

      <form className="new-item-form" onSubmit={handleSubmit}>

        <label className="new-item-label">Title</label>
        <input className="new-item-input" type="text" placeholder="Add item title" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
        
        <label className="new-item-label">Description</label>
        <input
          className="new-item-input"
          type="text"
          placeholder="Add item description"
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />

        <div className="new-item-file-input">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setData({ ...data, selectedFile: base64 })}
          />
        </div>

        <button className="new-item-submit-button" type="submit">
          Submit
        </button>
        
      </form>
    </div>
  );
};

export default NewItem;
