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
      window.location = `hhttps://barikq.github.io/gew-2019/index_en.html`;
      break;
    case 'RU':
      window.location = `https://barikq.github.io/gew-2019/index.html`;
      break;
  }
};
