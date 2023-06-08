import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const vimeoPlayer = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

let currentTime = localStorage.getItem(CURRENT_TIME);
if (!!currentTime) {
  vimeoPlayer.setCurrentTime(currentTime);
}

function onPlaying(data) {
  localStorage.setItem(CURRENT_TIME, data.seconds);
}

vimeoPlayer.on('timeupdate', throttle(onPlaying, 1000));
