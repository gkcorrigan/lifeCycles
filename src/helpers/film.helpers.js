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
/**
 * 
 * @param {Array} list A list of films
 * @returns {Object} Info about the list of films
 */

export function getFilmStats(list){
const total = list.length;

//Sum of all the movies' rotten tomato scores
const acc_score = list.reduce((accumulator, current) => {
return accumulator + Number(current.rt_score);
},0);

//the average of all the movies' rotten tomato scores
const avg_score = acc_score / total;

let latest = 0;
//would use reduce again, but we are going to do it a different way for learning purposes
list.forEach((element, index, array) => {
  if(element.release_date > latest){
     latest = element.release_date;
  }
});

//by using the curly braces, we are creating and returning objects in one step
return {
  total,
  acc_score,
  avg_score,
  latest
}
}

