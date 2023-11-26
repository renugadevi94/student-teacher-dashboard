import React, { useContext } from "react";
import  profile  from "../assets/undraw_profile.png";
import { Link } from "react-router-dom";
import Datacontext from "../context/Datacontext";
// creating and loading students list
const Feed = () => {
  const { students, handleDelete } = useContext(Datacontext);
  return (
    <>
      {students.map((e, i) => (
        <div key={i}>
          <div key={i} className="row">
            <div className="d-flex align-items-center flex-wrap justify-content-between row p-2 col-12">
              <div className="img ">
                <img
                  src={profile}
                  className="rounded-circle"
                  style={{ width: "40px" }}
                  alt="..."
                />
              </div>
              <div className="px-2 col-sm-3 ">{e.name}</div>
              <div className="taskTime px-md-1 col-2">{e.course}</div>
              <div className="taskTime px-md-1 col-2">{e.mentor}</div>
              <div className="col-2">
              <Link className="taskTime " data-set={e.id} to={`${e.id}`}>
                <button className="btn btn-warning">Edit</button>
              </Link>
              </div>
              <div className="col-2">
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(e.id)}
              >
                Delete
              </button>
            </div>
          </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Feed;