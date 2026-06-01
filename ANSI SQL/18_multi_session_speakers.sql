-- Exercise 17: Multi-Session Speakers
-- Identify speakers who are handling more than one session across all events.

SELECT
  s.speaker_name,
  COUNT(*) AS sessions_count
FROM Sessions s
GROUP BY s.speaker_name
HAVING COUNT(*) > 1
ORDER BY sessions_count DESC, s.speaker_name ASC;

