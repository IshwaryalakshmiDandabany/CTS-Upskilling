-- Exercise 23: Registration Trends
-- Show a month-wise registration count trend over the past 12 months.

SELECT
  DATE_FORMAT(r.registration_date, '%Y-%m') AS month,
  COUNT(*) AS registration_count
FROM Registrations r
WHERE r.registration_date >= DATE_FORMAT(CURRENT_DATE - INTERVAL 11 MONTH, '%Y-%m-01')
GROUP BY DATE_FORMAT(r.registration_date, '%Y-%m')
ORDER BY month ASC;

