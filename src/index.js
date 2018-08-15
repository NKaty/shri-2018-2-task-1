import initMap from './map';

window.ymaps.ready(() => {
  initMap(window.ymaps, 'map');
  console.log('inited');
});
