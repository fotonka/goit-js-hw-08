import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onCurrentTime, 1000));

function onCurrentTime(e) {
  const currentTime = e.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
  console.log(currentTime);
}

const getCurrentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(getCurrentTime).catch(function (e) {
  switch (e.name) {
    case 'RangeError':
      break;
  }
});
