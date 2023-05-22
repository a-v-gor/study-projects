export default function hideSettingsWindow() {
  if (!document.querySelector('.settings__window_unactive')) {
    document.querySelector('.settings__window').classList.add('settings__window_unactive');
  }
}
