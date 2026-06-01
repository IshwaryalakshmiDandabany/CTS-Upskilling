-- Exercise 19: Completed Events with Feedback Summary
-- For completed events, show total registrations and average feedback rating.

SELECT
  e.event_id,
  e.title,
  COUNT(DISTINCT r.registration_id) AS total_registrations,
  AVG(f.rating) AS avg_feedback_rating,
  COUNT(f.feedback_id) AS feedback_count
FROM Events e
LEFT JOIN Registrations r
  ON r.event_id = e.event_id
LEFT JOIN Feedback f
  ON f.event_id = e.event_id
WHERE e.status = 'completed'
GROUP BY e.event_id, e.title
ORDER BY e.event_id ASC;

