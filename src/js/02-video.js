import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(evt) {
  const currentTime = evt.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
  console.log(currentTime);
}

const savedTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(savedTime).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      break;
  }
});
