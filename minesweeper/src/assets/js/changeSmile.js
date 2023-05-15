export default function changeSmile(str) {
  const smile = document.querySelector('.stat__player');

  if (str === 'push') {
    smile.classList.add('stat__player_push');
  }
  if (str === 'unpush') {
    smile.classList.remove('stat__player_push');
  }
  if (str === 'mine') {
    smile.classList.add('stat__player_mine');
  }
  if (str === 'win') {
    smile.classList.add('stat__player_win');
  }
}
