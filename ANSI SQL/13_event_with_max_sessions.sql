-- Exercise 12: Event with Maximum Sessions
-- List the event(s) with the highest number of sessions.

SELECT
  e.event_id,
  e.title,
  COUNT(s.session_id) AS sessions_count
FROM Events e
LEFT JOIN Sessions s
  ON s.event_id = e.event_id
GROUP BY e.event_id, e.title
HAVING COUNT(s.session_id) = (
  SELECT MAX(cnt)
  FROM (
    SELECT COUNT(*) AS cnt
    FROM Sessions
    GROUP BY event_id
  ) x
)
ORDER BY e.event_id ASC;

