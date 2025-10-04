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
    const { user_id, name, category, is_default } = req.body;

    const result = await pool.query(
      `INSERT INTO exercises (name, category, is_default)
       VALUES ($1, $2, COALESCE($3, FALSE))
       RETURNING *`,
      [name, category, is_default]
    );

    const exercise = result.rows[0];

    if (user_id) {
      await pool.query(
        'INSERT INTO user_exercises (user_id, exercise_id) VALUES ($1, $2)',
        [user_id, exercise.id]
      );
    }

    res.json(exercise);
  } catch (err) {
    console.error("Error adding exercise:", err.message);
    res.status(500).json({ error: err.message });
  }
};
