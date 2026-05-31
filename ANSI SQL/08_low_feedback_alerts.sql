-- Exercise 7: Low Feedback Alerts
-- List all users who gave feedback with a rating less than 3,
-- along with their comments and associated event names.

SELECT
  u.user_id,
  u.full_name,
  u.email,
  e.event_id,
  e.title AS event_title,
  f.rating,
  f.comments,
  f.feedback_date
FROM Feedback f
JOIN Users u
  ON u.user_id = f.user_id
JOIN Events e
  ON e.event_id = f.event_id
WHERE f.rating < 3
ORDER BY f.rating ASC, f.feedback_date DESC, u.user_id ASC;

