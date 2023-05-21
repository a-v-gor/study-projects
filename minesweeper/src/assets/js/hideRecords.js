export default function hideRecords() {
  function removeRecordsTable() {
    document.querySelector('.records').removeEventListener('transitionend', removeRecordsTable);
    document.querySelector('.records').remove();
  }

  if (!document.querySelector('.records_unactive') && document.querySelector('.records')) {
    document.querySelector('.records').classList.add('records_unactive');
    document.querySelector('.records').addEventListener('transitionend', removeRecordsTable);
  }
}
