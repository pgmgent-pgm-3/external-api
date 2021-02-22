/**
 * A module to communicate with the random user api
 */

/**
 * Create the random user me URL
 * @param {*} options
 */
const createRandomUserMeUrl = (options = {}) => {
  const randomUserMeUrl = new URL('https://randomuser.me/api');
  for(const key in options) randomUserMeUrl.searchParams.append(key, options[key]);
  return randomUserMeUrl;
}

/**
 * A function that will fetch random users
 */
const fetchRandomUsers = async (options = {}) => {
  const data = await fetch(createRandomUserMeUrl(options));
  const json = await data.json();
  return json.results;
}

/**
 * Get some random users
 * @param {*} max
 */

export const getRandomUsers = (max = 5) => fetchRandomUsers({ "results": max });