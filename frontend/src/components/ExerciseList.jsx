import React, { useEffect, useState } from "react";
import API from "../api.js";

const ExerciseList = ({ userId }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const res = await API.get(`/exercises/${userId}`);
        setExercises(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchExercises();
  }, [userId]);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Exercises</h2>
      <ul className="space-y-2">
        {exercises.map((e) => (
          <li key={e.id} className="p-2 bg-gray-100 rounded">
            {e.name} ({e.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
