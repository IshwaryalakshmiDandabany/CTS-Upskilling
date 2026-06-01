-- Exercise 10: Feedback Gap
-- Identify events that had registrations but received no feedback at all.

SELECT
  e.event_id,
  e.title,
  e.city,
  COUNT(DISTINCT r.registration_id) AS registration_count
FROM Events e
JOIN Registrations r
  ON r.event_id = e.event_id
LEFT JOIN Feedback f
  ON f.event_id = e.event_id
WHERE f.feedback_id IS NULL
GROUP BY e.event_id, e.title, e.city
ORDER BY registration_count DESC, e.event_id ASC;

