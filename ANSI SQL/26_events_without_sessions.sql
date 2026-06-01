-- Exercise 25: Events Without Sessions
-- List all events that currently have no sessions scheduled under them.

SELECT
  e.event_id,
  e.title,
  e.city,
  e.start_date,
  e.end_date,
  e.status
FROM Events e
LEFT JOIN Sessions s
  ON s.event_id = e.event_id
WHERE s.session_id IS NULL
ORDER BY e.start_date ASC;

