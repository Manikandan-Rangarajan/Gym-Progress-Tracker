import { pool } from '../db.js';

export const addWorkout = async (req, res) => {
  try {
    const { user_id, date, notes, exercises } = req.body;

    const result = await pool.query(
      'INSERT INTO workouts (user_id, date, notes) VALUES ($1, $2, $3) RETURNING *',
      [user_id, date, notes]
    );
    const workout = result.rows[0];

    for (let ex of exercises) {
      await pool.query(
        'INSERT INTO progress_logs (workout_id, exercise_id, sets, reps, weight) VALUES ($1, $2, $3, $4, $5)',
        [workout.id, ex.exercise_id, ex.sets, ex.reps, ex.weight]
      );
    }

    res.json(workout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getWorkouts = async (req, res) => {
  try {
    const userId = req.params.userId;
    const result = await pool.query(
      'SELECT * FROM workouts WHERE user_id=$1 ORDER BY date DESC',
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
