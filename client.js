window.TrelloPowerUp.initialize({
  'list-actions': function(t, options) {
    return [{
      text: 'Download List Images',
      callback: function(t) {
        return t.signUrl('https://sneakyquill.github.io/trello-powerup-dowloader/index.html')
          .then(function(signedUrl) {
            return t.popup({
              title: 'Download List Images',
              url: signedUrl,
              height: 300
            });
          });
      }
    }];
  }
});
window.TrelloPowerUp.initialize({
  'board-buttons': function (t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/60/60740.png',
      text: 'Download List Images',
      callback: function(t) {
      return
t.signUrl('https://sneakyquill.github.io/trello-powerup-dowloader/index.html')
          .then(function(signedUrl) {
            return t.popup({
          title: "Select a List",
          items: () =>
            t.lists('id', 'name').then(lists =>
              lists.map(list => ({
                text: list.name,
                callback: () => downloadImagesFromList(t, list.id)
              }))
            )
        });
      }
    }];
  }
});