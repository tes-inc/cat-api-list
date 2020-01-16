$(() => {
  const url = 'https://api.thecatapi.com/v1/images/search?limit=10&order=Rand';

  $.ajax({
    url: url,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': '69cbc799-9501-414f-b090-d157951b4a44'
    },
    type: 'GET',
    dataType: 'json',
    success: function (result) {
      result.forEach(element => {
        let itemDiv = $('<div class="item"></div>');
        let imageDiv = $('<div class="ui small image"></div>');
        $('<img src="' + element.url + '">').prependTo(imageDiv);

        if (element.breeds.length > 0) {
          let contentDiv = $('<div class="content"></div>');
          let header = $('<a class="header">' + element.breeds[0].name + '</a>');

          let metaDiv = $('<div class="meta"></div>');
          let origin = $('<a>' + element.breeds[0].origin + '</a>');
          origin.prependTo(metaDiv);

          let descriptionDiv = $('<div class="description">' + element.breeds[0].description + '</div>');

          descriptionDiv.prependTo(contentDiv);
          metaDiv.prependTo(contentDiv);
          header.prependTo(contentDiv);

          contentDiv.prependTo(itemDiv);
        }

        imageDiv.prependTo(itemDiv);
        $('#cat-list').append(itemDiv);
      });
    },
    error: function () {
      console.log('error');
    }
  });
});
