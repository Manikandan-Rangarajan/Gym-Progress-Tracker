import { pool } from '../db.js';

// Fetch default + user-added exercises
export const getExercises = async (req, res) => {
  try {
    const userId = req.params.userId;

    const result = await pool.query(
      `SELECT * FROM exercises 
       WHERE is_default = TRUE 
       OR id IN (SELECT exercise_id FROM user_exercises WHERE user_id=$1)`,
      [userId]
    );

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new exercise for user
export const addExercise = async (req, res) => {
  try {
    const { user_id, name, category } = req.body;

    const result = await pool.query(
      'INSERT INTO exercises (name, category, is_default) VALUES ($1, $2, FALSE) RETURNING *',
      [name, category]
    );
    const exercise = result.rows[0];

    // Link to user
    await pool.query(
      'INSERT INTO user_exercises (user_id, exercise_id) VALUES ($1, $2)',
      [user_id, exercise.id]
    );

    res.json(exercise);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
