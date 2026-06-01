-- Exercise 24: Average Session Duration per Event
-- Compute the average duration (in minutes) of sessions in each event.

SELECT
  e.event_id,
  e.title,
  AVG(TIMESTAMPDIFF(MINUTE, s.start_time, s.end_time)) AS avg_session_duration_minutes
FROM Events e
JOIN Sessions s
  ON s.event_id = e.event_id
GROUP BY e.event_id, e.title
ORDER BY avg_session_duration_minutes DESC, e.event_id ASC;

