function loadMore(){

  $(".carregar-mais").on("click", function(e){
    e.preventDefault();
    $(".produtos-vitrine:hidden").slice(0, 6).slideDown();
  });


}loadMore();