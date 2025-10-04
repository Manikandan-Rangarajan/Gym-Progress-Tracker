import React from "react";
import ExerciseList from "../components/ExerciseList.jsx";
import WorkoutForm from "../components/WorkoutForm.jsx";
import PRChart from "../components/PRChart.jsx";

const Home = () => {
  const userId = 1; // Replace with logged-in user ID from auth

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to Gym Tracker</h1>

      {/* Exercise List */}
      <ExerciseList userId={userId} />

      {/* Workout Form */}
      <WorkoutForm userId={userId} />

      {/* PR Chart */}
      <PRChart userId={userId} />
    </div>
  );
};

export default Home;
