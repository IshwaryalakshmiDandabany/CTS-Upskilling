-- Exercise 13: Average Rating per City
-- Calculate the average feedback rating of events conducted in each city.

SELECT
  e.city,
  AVG(f.rating) AS avg_rating,
  COUNT(f.feedback_id) AS feedback_count
FROM Events e
JOIN Feedback f
  ON f.event_id = e.event_id
GROUP BY e.city
ORDER BY avg_rating DESC, e.city ASC;

