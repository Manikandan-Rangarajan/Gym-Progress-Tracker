import React, { useState } from "react";
import API from "../api.js";

const WorkoutForm = ({ userId }) => {
  const [exercise, setExercise] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/workouts", {
        user_id: userId,
        date: new Date(),
        notes: "",
        exercises: [{ exercise_id: exercise, weight, reps, sets: 1 }],
      });
      alert("Workout logged!");
      setExercise("");
      setWeight("");
      setReps("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <h2 className="text-lg font-bold mb-2">Log Workout</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Exercise ID"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Add Workout
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm;
