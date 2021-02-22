/**
 * Demo Service Workers Events
 */

self.importScripts('./vendor/faker.min.js');

/**
 * Helper functions
 */

const generateFakeUsers = (max = 5) => {
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

/**
 * Service Worker Events
 */

self.addEventListener("install", e => {
  console.log('Install event');
});

self.addEventListener("activate", e => {
  console.log('Activate event');
});

self.addEventListener("fetch", e => {
  // Get the parsed URL
  const parsedUrl = new URL(e.request.url);

  // Offline state
  const iAmOffline = false;

  // Random User API
  if(iAmOffline && parsedUrl.host === "randomuser.me")
  {
    // Get the options
    const optionParams = new URLSearchParams(parsedUrl.search).entries();
    const options = {};
    for(let option of optionParams) { options[option[0]] = option[1] }

    // Generate fake users
    const users = { results: generateFakeUsers(options.results) };

    // Define a response
    const jsonResponse = new Response(JSON.stringify(users), {
      status: 200,
      statusText: "OK",
      headers: {
        "Content-Type": "application/json"
      }
    });

    // Send out the response
    e.respondWith(jsonResponse);
  }
});