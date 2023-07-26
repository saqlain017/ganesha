import React from 'react'
import { useState,useEffect,useContext } from 'react';
import axios from 'axios'
import { AppContext } from '../../App';
import '../../assets/styles/PageStyles/Win.css'


function WinSidebar() {
      const {Token} = useContext(AppContext)
      console.log(Token)
      const [data, setData] = useState([]);
      async function fetchData() {
        try {
        const response = await axios.get('http://frontend.appswebdevelopment.com/public/api/show/', {
        headers: {
          Authorization: `Bearer ${Token}`,
            },
          });
      setData(response.data);
        } catch (error) {
      console.log('Error:', error.message);
          }
  }
      useEffect(() => {
        fetchData();
        },[]);
  const [editedData, setEditedData] = useState(data);
  const [editingId, setEditingId] = useState(null);
        
          const handleEdit = (id) => {
            setEditingId(id);
          };
        
          const handleSave = (id) => {
            setEditingId(null);
            setData(editedData);
          };
        
          const handleEditChange = (event, index) => {
            const { name, value } = event.target;
            setEditedData((prevData) =>
              prevData.map((item, i) => (i === index ? { ...item, [name]: value } : item))
            );
          };
      const handleDelete = (id) => {
            // Implement the delete functionality here.
            // Filter out the row with the given id from the data.
            setData((prevData) => prevData.filter((item) => item.id !== id));
          };
          console.log(data);
      return (    
      <>
            <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{editingId === item.id ? (
                  <input
                    type="text"
                    name="header1"
                    value={editedData[index].header1}
                    onChange={(e) => handleEditChange(e, index)}
                  />
                ) : (
                  item.header1
                )}</td>
              <td>{editingId === item.id ? (
                  <input
                    type="text"
                    name="header2"
                    value={editedData[index].header2}
                    onChange={(e) => handleEditChange(e, index)}
                  />
                ) : (
                  item.header2
                )}</td>
              <td>
              {editingId === item.id ? (
                  <button type="button" class="btn btn-warning me-3" onClick={() => handleSave(item.id)}><i class="fa-solid fa-floppy-disk"></i></button>
                ) : (
                  <button type="button" class="btn btn-warning me-3" onClick={() => handleEdit(item.id)}><i class="fa-solid fa-pen-to-square"></i></button>
                )}
                  <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash" onClick={() => handleDelete(item.id)}></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </>)}
export default WinSidebar