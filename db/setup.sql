-- psql command to run this file in psql shell:
-- \i /Users/noahbeito/Desktop/RFP2303/QuestionsAPI/db/setup.sql

\echo 'Delete and recreate qa db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE qa;
CREATE DATABASE qa;
\connect qa;

\i /Users/noahbeito/Desktop/RFP2303/QuestionsAPI/db/schema.sql
\i /Users/noahbeito/Desktop/RFP2303/QuestionsAPI/db/import.sql

\echo 'Delete and recreate qa_test db?'
\prompt 'Return for yes or control-C to cancel >' answer

DROP DATABASE qa_test;
CREATE DATABASE qa_test;
\connect qa_test;

\i /Users/noahbeito/Desktop/RFP2303/QuestionsAPI/db/schema.sql
\i /Users/noahbeito/Desktop/RFP2303/QuestionsAPI/db/import.sql