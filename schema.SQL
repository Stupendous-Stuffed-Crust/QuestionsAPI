CREATE TABLE Questions (
 question_id BIGSERIAL,
 product_id INTEGER,
 body TEXT,
 date DATE,
 asker_name TEXT,
 helpfulness INTEGER,
 reported BOOLEAN,
 page INTEGER,
 answer_count INTEGER
);


ALTER TABLE Questions ADD CONSTRAINT Questions_pkey PRIMARY KEY (question_id);

CREATE TABLE Answers (
 answer_id BIGSERIAL,
 question_id INTEGER,
 body INTEGER,
 date DATE,
 answerer_name TEXT,
 helpfulness INTEGER
);


ALTER TABLE Answers ADD CONSTRAINT Answers_pkey PRIMARY KEY (answer_id);

CREATE TABLE photos (
 id BIGSERIAL,
 url TEXT,
 answer_id INTEGER
);


ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (id);

ALTER TABLE Answers ADD CONSTRAINT Answers_question_id_fkey FOREIGN KEY (question_id) REFERENCES Questions(question_id);
ALTER TABLE photos ADD CONSTRAINT photos_answer_id_fkey FOREIGN KEY (answer_id) REFERENCES Answers(answer_id);