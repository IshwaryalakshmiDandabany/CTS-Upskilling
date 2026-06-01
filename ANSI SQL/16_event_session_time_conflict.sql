-- Exercise 15: Event Session Time Conflict
-- Identify overlapping sessions within the same event.
-- Conflict rule: s1.start_time < s2.end_time AND s1.end_time > s2.start_time

SELECT
  e.event_id,
  e.title AS event_title,
  s1.session_id AS session_1_id,
  s1.title AS session_1_title,
  s1.start_time AS session_1_start,
  s1.end_time AS session_1_end,
  s2.session_id AS session_2_id,
  s2.title AS session_2_title,
  s2.start_time AS session_2_start,
  s2.end_time AS session_2_end
FROM Events e
JOIN Sessions s1
  ON s1.event_id = e.event_id
JOIN Sessions s2
  ON s2.event_id = e.event_id
WHERE
  s1.session_id < s2.session_id
  AND s1.start_time < s2.end_time
  AND s1.end_time > s2.start_time
ORDER BY e.event_id ASC, s1.session_id ASC, s2.session_id ASC;

