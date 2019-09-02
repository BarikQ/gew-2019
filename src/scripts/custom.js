//handle modal
$('.modal-market').modal('hide');
$('.ticket-buy').bind('click', function(e) {
  e.preventDefault();
  $('.modal-market').modal('show');
});
$('#close_market').bind('click', function(e) {
  e.preventDefault();
  $('.modal-market').modal('hide');
});
//switch language
document.getElementById('d').onchange = (e) => {
  e.preventDefault();
  console.log(e.target.value);
  switch (e.target.value) {
    case 'EN':
      window.location = `http://gew.by/index_en.html`;
      break;
    case 'RU':
      window.location = `http://gew.by/index.html`;
      break;
  }
};

document.querySelectorAll('.button-buy__container').forEach(
  (elem) =>
    (elem.onclick = (e) => {
      e.preventDefault();
      window.location = `https://buy.ticketforevent.com/script/redirectForm.php?alias=gew2019&types[1]=${e.currentTarget.id}`;
    })
);
