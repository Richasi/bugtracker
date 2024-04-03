import React from "react";

const Card = ({ bug, onDelete, onEdit, onDrop }) => {
    const handleDelete = () => {
        onDelete(bug.id);
      };
    
      const handleEdit = (updatedData) => {
        onEdit(bug.id, updatedData);
      };
    
      const handleDrop = (newIndex) => {
        onDrop(bug.id, newIndex);
      };
    
      return (
        <div className="bug-card" draggable onDragEnd={handleDrop}>
          <h3>{bug.title}</h3>
          <p>{bug.description}</p>
          <button className="delete-button" onClick={handleDelete}>Delete</button>
          {/* Add edit functionality here */}
          <style jsx>{`
            .bug-card {
              border: 1px solid #ccc;
              border-radius: 5px;
              padding: 10px;
              margin-bottom: 10px;
              background-color: #f9f9f9;
            }
    
            .delete-button {
              background-color: red;
              color: white;
              border: none;
              padding: 5px 10px;
              border-radius: 3px;
              cursor: pointer;
            }
    
            /* Add additional styles as needed */
          `}</style>
        </div>
      );
};

export default Card;
