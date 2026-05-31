-- Exercise 3: Inactive Users
-- Retrieve users who have not registered for any events in the last 90 days.

SELECT
  u.user_id,
  u.full_name,
  u.email,
  u.city,
  u.registration_date
FROM Users u
LEFT JOIN Registrations r
  ON r.user_id = u.user_id
  AND r.registration_date >= (CURRENT_DATE - INTERVAL 90 DAY)
WHERE
  r.registration_id IS NULL
ORDER BY u.registration_date ASC;

