window.TrelloPowerUp.initialize({
  'board-buttons': function (t, options) {
    return [{
      icon: 'https://webstockreview.net/images/download-icon-png-5.png',
      text: 'Download List Attachments',
      callback: function (t) {
        return t.popup({
          title: 'Choose List',
          items: () =>
            lists.map(list => ({
              text: list.name,
              callback: () =>
downloadImagesFromList(t, list.id)
            }))
            )
        });
      }
    }];
  }
});
