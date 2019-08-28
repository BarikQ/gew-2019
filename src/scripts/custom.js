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
      window.location = `http://127.0.0.1:5500/index_en.html`;
      break;
    case 'RU':
      window.location = `http://127.0.0.1:5500/index.html`;
      break;
  }
};
