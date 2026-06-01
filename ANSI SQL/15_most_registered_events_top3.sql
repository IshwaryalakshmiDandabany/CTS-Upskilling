-- Exercise 14: Most Registered Events
-- List top 3 events based on the total number of user registrations.

SELECT
  e.event_id,
  e.title,
  e.city,
  COUNT(r.registration_id) AS total_registrations
FROM Events e
JOIN Registrations r
  ON r.event_id = e.event_id
GROUP BY e.event_id, e.title, e.city
ORDER BY total_registrations DESC, e.event_id ASC
LIMIT 3;

