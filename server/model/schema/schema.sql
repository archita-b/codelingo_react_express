-- create lessons table
CREATE TABLE lessons (
  id INTEGER NOT NULL UNIQUE,
  lesson_name VARCHAR(256),
  description VARCHAR(256)
);

-- create users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE
);

-- create question_type table
CREATE TABLE question_type (
  type VARCHAR(50) PRIMARY KEY
);

-- create questions table
CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    type VARCHAR(50) REFERENCES question_type(type),
    lesson_id INTEGER REFERENCES lessons(id),
    question VARCHAR(256) NOT NULL,
    answers TEXT [],
    correctanswer INTEGER NOT NULL
);

-- create lesson_completion table
CREATE TABLE lesson_completion (
  user_id SERIAL REFERENCES users(id),
  lesson_id INTEGER REFERENCES lessons(id),
  is_completed BOOLEAN DEFAULT FALSE
);

-- create sessions table
CREATE TABLE sessions (
  user_id SERIAL REFERENCES users(id),
  session_id VARCHAR PRIMARY KEY,
  deleted BOOLEAN DEFAULT FALSE
);
