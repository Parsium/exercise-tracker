import SetInfo from "./SetInfo";
import CloseButton from "./CloseButton";

const ExerciseItem = ({id, name, repType, handleDelete}) => {
    return (
        <div className="exercise">
          <div className="title">
            <h3>{name}</h3>
            <CloseButton onClick={(event) => handleDelete(id)}/>
          </div>
          <table>
            <thead>
              <tr>
                <th>Set</th>
                <th>{repType}</th>
                <th>Reps</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              <SetInfo set={1} workDone={20} reps={10} />
              <SetInfo set={2} workDone={20} reps={10} />
              <SetInfo set={3} workDone={20} reps={10} />
            </tbody>
          </table>
          <button className="btn">+ Add set</button>
        </div>
    );
};

export default ExerciseItem;