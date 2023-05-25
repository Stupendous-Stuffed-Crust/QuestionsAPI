-- psql command to run this file in terminal:
-- \i /Users/noahbeito/Desktop/RFP2303/QuestionsAPI/import.sql

\COPY questions(id, product_id, body, date_written, asker_name, asker_email, reported, helpful) FROM '/Users/noahbeito/Desktop/RFP2303/QuestionsAPI/data/questions.csv' DELIMITER ',' CSV HEADER;

\COPY answers(id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful) FROM '/Users/noahbeito/Desktop/RFP2303/QuestionsAPI/data/answers.csv' DELIMITER ',' CSV HEADER;

\COPY photos(id, answer_id, url) FROM '/Users/noahbeito/Desktop/RFP2303/QuestionsAPI/data/answers_photos.csv' DELIMITER ',' CSV HEADER;