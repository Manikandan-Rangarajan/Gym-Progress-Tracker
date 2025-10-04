import { pool } from '../db.js';

// Get PRs for user
export const getPRs = async (req, res) => {
  try {
    const userId = req.params.userId;
    const result = await pool.query(
      'SELECT * FROM personal_records WHERE user_id=$1 ORDER BY date DESC',
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add/update PR
export const addPR = async (req, res) => {
  try {
    const { user_id, exercise_id, weight, reps, date } = req.body;

    const existing = await pool.query(
      'SELECT * FROM personal_records WHERE user_id=$1 AND exercise_id=$2',
      [user_id, exercise_id]
    );

    if (existing.rows.length > 0) {
      await pool.query(
        'UPDATE personal_records SET weight=$1, reps=$2, date=$3 WHERE user_id=$4 AND exercise_id=$5',
        [weight, reps, date, user_id, exercise_id]
      );
    } else {
      await pool.query(
        'INSERT INTO personal_records (user_id, exercise_id, weight, reps, date) VALUES ($1, $2, $3, $4, $5)',
        [user_id, exercise_id, weight, reps, date]
      );
    }

    res.json({ message: 'PR updated/added' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
