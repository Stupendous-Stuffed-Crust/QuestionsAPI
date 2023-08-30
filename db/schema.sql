-- psql command to run this file in psql shell:
-- \i [FilePath...]/schema.sql

DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS answers CASCADE;
DROP TABLE IF EXISTS photos CASCADE;


CREATE TABLE questions (
 id BIGSERIAL NOT NULL,
 product_id INTEGER NOT NULL,
 body TEXT NOT NULL,
 date_written BIGINT NOT NULL,
 asker_name TEXT NOT NULL,
 asker_email TEXT,
 reported BOOLEAN DEFAULT false,
 helpful INTEGER DEFAULT 0
);


ALTER TABLE questions ADD CONSTRAINT questions_pkey PRIMARY KEY (id);

CREATE TABLE answers (
 id BIGSERIAL NOT NULL,
 question_id INTEGER NOT NULL,
 body TEXT NOT NULL,
 date_written BIGINT NOT NULL,
 answerer_name TEXT NOT NULL,
 answerer_email TEXT,
 reported BOOLEAN DEFAULT false,
 helpful INTEGER DEFAULT 0
);


ALTER TABLE answers ADD CONSTRAINT answers_pkey PRIMARY KEY (id);

CREATE TABLE photos (
 id BIGSERIAL NOT NULL,
 answer_id INTEGER NOT NULL,
 url TEXT NOT NULL
);


ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (id);

ALTER TABLE answers ADD CONSTRAINT Answers_question_id_fkey FOREIGN KEY (question_id) REFERENCES questions(id);
ALTER TABLE photos ADD CONSTRAINT photos_answer_id_fkey FOREIGN KEY (answer_id) REFERENCES answers(id);

-- add index for columns that will be frequently used to significantly reduce read query times
CREATE INDEX product_id_index ON questions (product_id);
CREATE INDEX question_id_index ON answers (question_id);
CREATE INDEX answer_id_index ON photos (answer_id);
