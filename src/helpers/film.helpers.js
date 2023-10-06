export function filterFilmsByDirector(list, director) {
  if (!director) return list;
  return list.filter((movie, index, array) => {
    return movie.director == director;
  });
}
/**
 *
 * @param {Array} list Any array of objects
 * @param {String} prop Any property name on the objects
 * @returns {Array} All unique values at the given property within list
 */
export function getListOf(list, key) {
  const result = [];

  for (let i = 0; i < list.length; i++) {
    const value = list[i][key];
    if (!result.includes(value)) {
      result.push(value);
    }
  }
  return result;
}
