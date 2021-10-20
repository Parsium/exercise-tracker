const SetInfo = ({set, workDone, reps}) => {
    return (
        <tr>
            <td>{set}</td>
            <td>{workDone}</td>
            <td>{reps}</td>
            <td><input type="checkbox"/></td>
        </tr>
    );
};

export default SetInfo;