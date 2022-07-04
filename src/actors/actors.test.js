import tester from '../util/tester.js';
import actors from './actors.js';

const testCases = [
  {
    input: [
      { name: 'Johnny Depp', gender: 'male', birthday: '1963-06-09' },
      { name: 'Brad Pitt', gender: 'male', birthday: '1963-12-18' },
      { name: 'Quentin Tarantino', gender: 'male', birthday: '1963-03-27' },
      { name: 'Vladimir Mashkov', gender: 'male', birthday: '1963-11-27' },
      { name: 'Helen Hunt', gender: 'female', birthday: '1963-06-15' },
      { name: 'Whitney Houston', gender: 'female', birthday: '1963-08-09' },
      { name: 'Keanu Reeves', gender: 'male', birthday: '1964-09-02' },
      { name: 'Nicolas Cage', gender: 'male', birthday: '1964-01-07' },
      { name: 'Monica Bellucci', gender: 'female', birthday: '1964-09-30' },
      { name: 'Sandra Bullock', gender: 'female', birthday: '1964-07-26' },
      { name: 'Robert Downey Jr.', gender: 'male', birthday: '1965-04-04' },
      { name: 'Helena Bonham Carter', gender: 'female', birthday: '1966-05-26' },
      { name: 'Nicole Kidman', gender: 'female', birthday: '1967-06-20' },
      { name: 'Dmitry Nagiyev', gender: 'male', birthday: '1967-04-04' },
      { name: 'Matt Damon', gender: 'male', birthday: '1970-10-08' },
      { name: 'Leonardo DiCaprio', gender: 'male', birthday: '1974-11-11' },
      { name: 'Angelina Jolie', gender: 'female', birthday: '1975-06-04' },
      { name: 'Benedict Cumberbatch', gender: 'male', birthday: '1976-07-19' },
    ],
    output: {
      1963: 4,
      1964: 2,
      1965: 1,
      1967: 1,
      1970: 1,
      1974: 1,
      1976: 1,
    },
  },
];
tester(testCases, actors, 'Actors');
