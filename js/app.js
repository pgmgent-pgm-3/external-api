/**
 * The External API application
 */

import { getRandomUsers } from './api/RandomUserMe.js';
import { createContainer, createImg, createPopperTooltip } from './lib/Elements.js';
import { generateFakeUsers } from './lib/FakeData.js';

/**
 * Initialize the application
 */
const init = async () => {
  // register service worker
  registerServiceWorker();

  // load users in the DOM
  loadUsers();
}

/**
 * Show/Hide popper tooltip when hovering
 *
 * @param {*} popperInstance
 * @param {*} avatar
 * @param {*} tooltip
 */
const addPopperListeners = (popperInstance, avatar, tooltip) => {
  // define all the possible events
  const showEvents = ['mouseenter', 'focus'];
  const hideEvents = ['mouseleave', 'blur'];

  // loop over the show events
  showEvents.forEach(event => {
    avatar.addEventListener(event, () => {
      tooltip.setAttribute('data-show', '');
      popperInstance.update();
    });
  });

  // loop over the hide events
  hideEvents.forEach(event => {
    avatar.addEventListener(event, () => tooltip.removeAttribute('data-show', ''));
  });
}

/**
 * Load the users in the DOM
 */
const loadUsers = async () => {
   // get the userscontainer
  const usersContainer = document.querySelector('#users .row');

  // doing some stuff
  // const users = await getRandomUsers(30);
  const users = generateFakeUsers(10);
  // console.log(users);

  // loop over users and create the images
  const containers = users.map((user) =>
  {
    // create a user container
    const userContainer = createContainer({ classList: [ "user", "col-6", "col-md-4", "col-lg-3", "col-xl-2" ] });

    // create an avatar
    const avatar = createImg({
      src: user.picture.medium,
      title: user.name.first,
      alt: user.name.last
    });

    // convert the birth date via day js
    const birthDate = dayjs(user.dob.date);

    // create a popper tooltip
    const tooltip = createPopperTooltip({
      label: `${user.name.first} ${user.name.last} was born on ${birthDate.format('DD/MM/YYYY')}`,
      show: false
    });

    // create popper container
    const popperInstance = Popper.createPopper(avatar, tooltip, {
      placement: 'bottom',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });

    // add events for hiding and showing
    addPopperListeners(popperInstance, avatar, tooltip);

    // add the avatar to the user container
    userContainer.appendChild(avatar);
    userContainer.appendChild(tooltip);

    // return the user container
    return userContainer;
  });

  // append the containers
  usersContainer.append(...containers);
}

/**
 * Register the service worker
 */
const registerServiceWorker = () => {
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
}

window.addEventListener('DOMContentLoaded', init);