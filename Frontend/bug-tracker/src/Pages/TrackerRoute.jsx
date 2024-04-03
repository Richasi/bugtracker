import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import AddBugForm from "./AddBug";

const TrackerRoute =()=>{

    const [bugs, setBugs] = useState([]);

  useEffect(() => {
    fetchBugs();
  }, []);

  const fetchBugs = async () => {
    try {
      const response = await axios.get("/api/bugs");
      setBugs(response.data);
    } catch (error) {
      console.error("Error fetching bugs:", error);
    }
  };

  const addBug = async (bugData) => {
    try {
      const response = await axios.post("/api/bugs", bugData);
      setBugs([...bugs, response.data]);
    } catch (error) {
      console.error("Error adding bug:", error);
    }
  };

  const deleteBug = async (bugId) => {
    try {
      await axios.delete(`/api/bugs/${bugId}`);
      setBugs(bugs.filter((bug) => bug.id !== bugId));
    } catch (error) {
      console.error("Error deleting bug:", error);
    }
  };

  const editBug = async (bugId, updatedData) => {
    try {
      await axios.put(`/api/bugs/${bugId}`, updatedData);
      setBugs(bugs.map((bug) => (bug.id === bugId ? { ...bug, ...updatedData } : bug)));
    } catch (error) {
      console.error("Error editing bug:", error);
    }
  };

  const handleBugDrop = async (bugId, newIndex) => {
    try {
      await axios.put(`/api/bugs/${bugId}`, { index: newIndex });
      fetchBugs();
    } catch (error) {
      console.error("Error updating bug index:", error);
    }
  };

  return (
    <div>
      <h1>Welcome to Tracker</h1>
      <div className="bug-stacks">
        <div className="bug-stack">
          <h2>Critical Severity</h2>
          {bugs
            .filter((bug) => bug.severity === "Critical")
            .map((bug) => (
              <Card key={bug.id} bug={bug} onDelete={deleteBug} onEdit={editBug} onDrop={handleBugDrop} />
            ))}
          <AddBugForm onSubmit={addBug} />
        </div>
        {/* Similar divs for other severity levels */}
      </div>
    </div>
  );
}

export default TrackerRoute;