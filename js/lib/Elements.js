/**
 * A module for HTML elements
 */

export const createContainer = ({ classList = [], attrs = null } = {}) => {
  const div = document.createElement('div');
  if(classList) div.classList.add(...classList);
  if(attrs) for(const key in attrs) div.setAttribute(key, attrs[key]);
  return div;
}

export const createImg = ({ src, title = '', alt = '' }) => {
  const img = document.createElement('img');
  img.src = src;
  img.title = title;
  img.alt = alt;
  return img;
}

export const createPopperTooltip = ({ label = '', show = true }) => {
  // create the tooltip container
  const tooltipContainer = createContainer({
    attrs: {
      id: "tooltip",
      role: "tooltip"
  }});

  // set the label in the tooltip
  tooltipContainer.innerHTML = label;

  // create the arrow container
  const arrowContainer = createContainer({
    attrs: {
      id: "arrow",
      "data-propper-arrow": true,
      "data-show": show
    }
  });

  // add arrow to the tooltip container
  tooltipContainer.appendChild(arrowContainer);

  // return the tooltip container
  return tooltipContainer
}