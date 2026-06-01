-- Exercise 18: Resource Availability Check
-- List all events that do not have any resources uploaded.

SELECT
  e.event_id,
  e.title,
  e.city,
  e.start_date,
  e.end_date
FROM Events e
LEFT JOIN Resources r
  ON r.event_id = e.event_id
WHERE r.resource_id IS NULL
ORDER BY e.start_date ASC;

