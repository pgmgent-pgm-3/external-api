/**
 * A wrapper around faker
 */

/**
 * Generate some fake users
 * @param {} max
 */
export const generateFakeUsers = (max = 5) => {
  const output = [];
  for(let i=0; i < max; i++)
  {
    const uuid = faker.random.uuid();
    output.push({
      id: {
        value: uuid
      },
      gender: faker.name.gender(),
      name: {
        first: faker.name.firstName(),
        last: faker.name.lastName(),
        title: faker.name.prefix()
      },
      email: faker.internet.email(),
      dob: {
        date: faker.date.past()
      },
      picture: {
        // faker.image.avatar uses an offline service uifaces.com
        // use dicebear instead
        large: `https://avatars.dicebear.com/4.5/api/avataaars/${uuid}.svg`,
        medium: `https://avatars.dicebear.com/4.5/api/avataaars/${uuid}.svg`,
        thumbnail: `https://avatars.dicebear.com/4.5/api/avataaars/${uuid}.svg`
      }
    })
  }
  return output;
}