import React, { useContext } from "react";
import Datacontext from "../context/Datacontext";

const Createteach = () => {
  const { newMentor, setNewMentor, handleUpdateMentor, handleCancelMentor } =
    useContext(Datacontext);
  return (
    <>
      <form className="NewTask" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group d-flex align-items-baseline flex-column">
          <label htmlFor="text">Mentor Name</label>
          <input
            type="text"
            id="text"
            placeholder="Mentor Name"
            value={newMentor}
            required
            className="form-control"
            onChange={(e) => setNewMentor(e.target.value)}
          />
        </div>
        <div className="form-group row d-flex align-items-center justify-content-center g-2">
          <button
            className="btn btn-warning col-1"
            style={{ marginRight: '5px' }}
            onClick={handleCancelMentor}
          >
            Cancel
          </button>
          <button
            className="btn btn-success col-1"
            onClick={handleUpdateMentor}
          >
            Save
          </button>
        </div>
        <hr />
      </form>
    </>
  );
};

export default Createteach;