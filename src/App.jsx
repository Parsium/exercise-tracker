import ExerciseItem from "./components/ExerciseItem";
import React, { useState } from "react";


const App = ({data=[]}) => {
  const [exercises, setExercises] = useState(data);

  function addExercise(event) {
    event.preventDefault();

    const name = event.target["name"].value;
    const repType = event.target["rep-type"].value;
    if (name === "") return; // Verify name is not empty string
    
    var newData = {
      "name": name,
      "repType": repType
    };
    setExercises(exercises => [...exercises, newData]);
    event.target["name"].value = ""; // reset input
  }

  function deleteExercise(id) {
    var newExercises = [...exercises];
    newExercises.splice(id, 1);
    setExercises(exercises => newExercises);
  }

  return (
      <div className="container">
        <h1>Exercise Tracker</h1>
        <div>
          { 
            exercises.map((exercise, id) => { return (
              <ExerciseItem 
                key={id} 
                id={id} 
                name={exercise.name} 
                repType={exercise.repType}
                handleDelete={deleteExercise}
              />
            )})
          }
        </div>

        <div className="title">
          <h3>Add new exercise</h3>
        </div>
        <form autoComplete="off" onSubmit={addExercise}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="i.e. Goblet Squat" />
            <label htmlFor="rep-type">Repetition type</label>
            <select name="rep-type">
            <option>Weight</option>
            <option>Time</option>
            </select>
            <button type="submit" className="btn" id="new-exercise-btn">+ Add exercise</button>
        </form>
      </div>
  );
}

export default App;