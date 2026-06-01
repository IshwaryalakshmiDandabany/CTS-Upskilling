-- Exercise 21: Top Feedback Providers
-- List top 5 users who have submitted the most feedback entries.

SELECT
  u.user_id,
  u.full_name,
  COUNT(f.feedback_id) AS feedback_submissions
FROM Users u
JOIN Feedback f
  ON f.user_id = u.user_id
GROUP BY u.user_id, u.full_name
ORDER BY feedback_submissions DESC, u.user_id ASC
LIMIT 5;

