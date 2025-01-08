(function($) {
  $.fn.fullYear = function(options) {
    const { isEnterprise = false } = options;
    
    return this.each(function() {
      const $element = $(this);
      
      $.ajax({
        url: 'https://getfullyear.com/api/year',
        method: 'GET',
        success: function(response) {
          if (!isEnterprise) {
            console.log(response.sponsored_by);
          }

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
