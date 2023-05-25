DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS answers CASCADE;
DROP TABLE IF EXISTS photos CASCADE;

CREATE TABLE Questions (
 id BIGSERIAL NOT NULL,
 product_id INTEGER NOT NULL,
 body TEXT NOT NULL,
 date_written TEXT NOT NULL,
 asker_name TEXT NOT NULL,
 asker_email TEXT,
 reported BOOLEAN,
 helpful INTEGER
);


ALTER TABLE Questions ADD CONSTRAINT Questions_pkey PRIMARY KEY (id);

CREATE TABLE Answers (
 id BIGSERIAL NOT NULL,
 question_id INTEGER NOT NULL,
 body TEXT NOT NULL,
 date_written TEXT NOT NULL,
 answerer_name TEXT NOT NULL,
 answerer_email TEXT,
 reported BOOLEAN,
 helpful INTEGER
);


ALTER TABLE Answers ADD CONSTRAINT Answers_pkey PRIMARY KEY (id);

CREATE TABLE photos (
 id BIGSERIAL NOT NULL,
 url TEXT NOT NULL,
 answer_id INTEGER NOT NULL
);


ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (id);

ALTER TABLE Answers ADD CONSTRAINT Answers_question_id_fkey FOREIGN KEY (question_id) REFERENCES Questions(id);
ALTER TABLE photos ADD CONSTRAINT photos_answer_id_fkey FOREIGN KEY (answer_id) REFERENCES Answers(id);