import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const teslimTarihi = new Date(taskObj.deadline);
  const bugun = new Date();
  console.log("bugun", bugun);
  const fark = differenceInDays(teslimTarihi, bugun);
  console.log("fark=> ", fark);

  const deadlineStyle = {
    backgroundColor: fark <= 3 ? "#ffd9d4" : "#7ee1f2",
  };

  const ayarlama =
    fark > 0
      ? `${fark} gün sonra`
      : formatDistanceToNow(teslimTarihi, { addSuffix: true });
  console.log("form=>", formatDistanceToNow);
  console.log("diff=> ", differenceInDays);

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim
        <span style={deadlineStyle}>
          {taskObj.deadline} {ayarlama}
        </span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
