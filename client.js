window.TrelloPowerUp.initialize({
  'board-buttons': function (t, options) {
    return [{
      text: 'Download List Attachments',
      callback: window.showListPicker
    }];
  }
});
window.showListPicker = function (t) {
        return t.popup({
          title: 'Select List',
          items: () =>
            t.lists('id','name').then(lists =>
              lists.map(list => ({
              text: list.name,
              callback: () =>
downloadImagesFromList(t, list.id)
            }))
            )
        });
};