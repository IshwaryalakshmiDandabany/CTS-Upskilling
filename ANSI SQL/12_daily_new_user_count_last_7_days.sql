-- Exercise 11: Daily New User Count
-- Find the number of users who registered each day in the last 7 days.

SELECT
  DATE(u.registration_date) AS registration_day,
  COUNT(*) AS new_user_count
FROM Users u
WHERE u.registration_date >= (CURRENT_DATE - INTERVAL 6 DAY)
GROUP BY DATE(u.registration_date)
ORDER BY registration_day ASC;

