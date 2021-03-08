// DOM manipulator
export const render = (
  parentDOM,
  { cityName, weatherMain, weatherDescription, feelsLike }
) => {
  parentDOM.innerHTML = "";

  // weatherMain
  const cityNameDOM = document.createElement("li");
  cityNameDOM.innerHTML = `cityName: ${cityName}`;
  parentDOM.appendChild(cityNameDOM);

  // weatherMain
  const weatherMainDOM = document.createElement("li");
  weatherMainDOM.innerHTML = `weatherMain: ${weatherMain}`;
  parentDOM.appendChild(weatherMainDOM);

  // weatherMain
  const weatherDescriptionDOM = document.createElement("li");
  weatherDescriptionDOM.innerHTML = `weatherDescription: ${weatherDescription}`;
  parentDOM.appendChild(weatherDescriptionDOM);

  // feel like
  const feelLikeDOM = document.createElement("li");
  feelLikeDOM.innerHTML = `feelsLike: ${feelsLike}`;
  parentDOM.appendChild(feelLikeDOM);

  // meta
  const lastUpdatedDOM = document.createElement("li");
  lastUpdatedDOM.innerHTML = `last updated: ${new Date().toISOString()}`;
  parentDOM.appendChild(lastUpdatedDOM);

  return parentDOM;
};
