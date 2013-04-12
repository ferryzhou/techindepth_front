host = 'http://techindepth.herokuapp.com';

var card_tmpl = _.template($("#article_card").html());

function render_cards(items) {
  console.log('render cards ' + items.length);
  var cards = [];
  for (var i = 0; i < items.length; i++) {
    cards.push(card_tmpl(items[i]));
  }
  console.log(cards.join('\n'));
  $('#article_cards').html(cards.join('\n'));
}


$.getJSON(host + '/articles.json?callback=?', null, function(articles) {
  render_cards(articles);
});
