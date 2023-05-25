-- psql command to run this file in terminal:
-- \i /Users/noahbeito/Desktop/RFP2303/QuestionsAPI/db/import.sql

\COPY questions FROM '/Users/noahbeito/Desktop/RFP2303/QuestionsAPI/data/questions.csv' DELIMITER ',' CSV HEADER;

\COPY answers FROM '/Users/noahbeito/Desktop/RFP2303/QuestionsAPI/data/answers.csv' DELIMITER ',' CSV HEADER;

\COPY photos FROM '/Users/noahbeito/Desktop/RFP2303/QuestionsAPI/data/answers_photos.csv' DELIMITER ',' CSV HEADER;