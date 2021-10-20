
const EditSet = () => {
    return (
        <div id="edit-set-container">
          <label>Weight</label>
            <div id="edit-set-control">
              <button className="btn btn-add-del">+</button>
              <span className="edited-value">70.0</span>
              <button className="btn btn-add-del">-</button>
            </div>
            <label>Reps</label>
            <div id="edit-set-control">
              <button className="btn btn-add-del">+</button>
              <span className="edited-value">10</span>
              <button className="btn btn-add-del">-</button>
            </div>
            <button className="btn">Save</button>
            <button className="btn">Delete</button>        
      </div>
    );
};

export default EditSet;