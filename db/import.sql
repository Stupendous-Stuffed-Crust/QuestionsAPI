-- psql command to run this file in psql shell:
-- \i [FilePath...]/import.sql

\COPY questions FROM '/Users/noahbeito/Desktop/RFP2303/QuestionsAPI/data/questions.csv' DELIMITER ',' CSV HEADER;

\COPY answers FROM '/Users/noahbeito/Desktop/RFP2303/QuestionsAPI/data/answers.csv' DELIMITER ',' CSV HEADER;

\COPY photos FROM '/Users/noahbeito/Desktop/RFP2303/QuestionsAPI/data/answers_photos.csv' DELIMITER ',' CSV HEADER;

-- Update primary keys to begin incrementing from the end of the table
SELECT SETVAL('public."questions_id_seq"', COALESCE(MAX(id), 1)) FROM public."questions";
SELECT SETVAL('public."answers_id_seq"', COALESCE(MAX(id), 1)) FROM public."answers";
SELECT SETVAL('public."photos_id_seq"', COALESCE(MAX(id), 1)) FROM public."photos";

--
