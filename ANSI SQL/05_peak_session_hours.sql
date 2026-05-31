-- Exercise 4: Peak Session Hours
-- Count how many sessions are scheduled between 10 AM to 12 PM for each event.

SELECT
  e.event_id,
  e.title,
  COUNT(*) AS sessions_between_10_and_12
FROM Events e
JOIN Sessions s
  ON s.event_id = e.event_id
WHERE
  TIME(s.start_time) >= '10:00:00'
  AND TIME(s.start_time) <  '12:00:00'
GROUP BY e.event_id, e.title
ORDER BY sessions_between_10_and_12 DESC, e.event_id ASC;

