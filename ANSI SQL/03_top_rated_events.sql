-- Exercise 2: Top Rated Events
-- Identify events with the highest average rating,
-- considering only those that have received at least 10 feedback submissions.

SELECT
  e.event_id,
  e.title,
  e.city,
  AVG(f.rating) AS avg_rating,
  COUNT(f.feedback_id) AS feedback_count
FROM Events e
JOIN Feedback f
  ON f.event_id = e.event_id
GROUP BY e.event_id, e.title, e.city
HAVING COUNT(f.feedback_id) >= 10
ORDER BY avg_rating DESC, feedback_count DESC, e.event_id ASC
LIMIT 10;

