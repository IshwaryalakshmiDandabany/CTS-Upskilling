-- Exercise 9: Organizer Event Summary
-- For each event organizer, show the number of events created and their current status.
-- Note: status here is per event; we group by organizer and event status.

SELECT
  u.user_id AS organizer_id,
  u.full_name AS organizer_name,
  e.status,
  COUNT(*) AS events_created
FROM Events e
JOIN Users u
  ON u.user_id = e.organizer_id
GROUP BY u.user_id, u.full_name, e.status
ORDER BY u.user_id ASC, e.status ASC;

