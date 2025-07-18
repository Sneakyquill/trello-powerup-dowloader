window.TrelloPowerUp.initialize({
  'board-buttons': function (t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/3649/3649467.png',
      text: 'Download List Images',
      callback: function (t) {
        return t.popup({
          title: 'Choose List',
          url: 'index.html',
          height: 300
        });
      }
    }];
  }
});