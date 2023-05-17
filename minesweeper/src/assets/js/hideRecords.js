export default function hideRecords() {
  if (!document.querySelector('.records_unactive')) {
    document.querySelector('.records').classList.add('records_unactive');
  }
}
