(function($) {
  $.fn.fullYear = function() {
    return this.each(function() {
      const $element = $(this);
      
      $.ajax({
        url: 'https://getfullyear.com/api/year',
        method: 'GET',
        success: function(response) {
          $element.text(response.year);
        },
        error: function() {
          console.error('Error loading year')
          $element.text('¯\_(ツ)_/¯');
        }
      });
    });
  };
})(jQuery);
