export default function (actors) {
  const men = actors.filter((actor) => actor.gender === 'male');
  const years = men.map((man) => man.birthday.split('-')[0]);
  const countByYear = years.reduce(
    (carry, year) => {
      if (!(year in carry)) {
        // eslint-disable-next-line no-param-reassign
        carry[year] = 0;
      }
      // eslint-disable-next-line no-param-reassign
      carry[year]++;
      return carry;
    },
    {},
  );
  return countByYear;
}
