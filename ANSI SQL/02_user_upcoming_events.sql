-- Exercise 1: User Upcoming Events
-- Show a list of all upcoming events a user is registered for in their city, sorted by date.

-- Parameters: replace :p_user_id with a specific user_id
-- Uses MySQL (placeholders can be adapted for your environment)

SELECT
  e.event_id,
  e.title,
  e.city,
  e.start_date,
  e.end_date,
  e.status,
  e.organizer_id
FROM Registrations r
JOIN Users u
  ON u.user_id = r.user_id
JOIN Events e
  ON e.event_id = r.event_id
WHERE
  r.user_id = :p_user_id
  AND e.status = 'upcoming'
  AND u.city = e.city
ORDER BY e.start_date ASC;

