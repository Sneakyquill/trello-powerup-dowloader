window.TrelloPowerUp.initialize({
  'list-actions': function(t, options) {
    return [{
      text: 'Download List Images',
      callback: function(t) {
        return t.signUrl('index.html')
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
