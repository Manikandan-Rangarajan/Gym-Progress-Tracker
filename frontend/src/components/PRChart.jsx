import React, { useEffect, useState } from "react";
import API from "../api.js";

const PRChart = ({ userId }) => {
  const [prs, setPRs] = useState([]);

  useEffect(() => {
    const fetchPRs = async () => {
      try {
        const res = await API.get(`/pr/${userId}`);
        setPRs(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPRs();
  }, [userId]);

  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <h2 className="text-lg font-bold mb-2">Personal Records</h2>
      <ul className="space-y-2">
        {prs.map((pr) => (
          <li key={pr.id} className="p-2 bg-gray-100 rounded">
            Exercise ID: {pr.exercise_id}, Weight: {pr.weight}, Reps: {pr.reps}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PRChart;
