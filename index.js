function smoothScroll() {
  $('.scroll').click(function(e) {
    e.preventDefault();
    $('body, html').animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      600
    );
  });
}

$(smoothScroll);
