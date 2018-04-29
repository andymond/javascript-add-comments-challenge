$(document).ready(function(){
  $('#new_comment_button').click(function() {
    const commentBody = '<textarea name="comment_body"></textarea>'
    const commentAuthor = '<input name="author" type="text"></input>'
    const submitComment = '<input id="comment-submit" name="submit" type="submit"></input>'
    const commentForm = `<form id="new_comment">${commentBody}<br>${commentAuthor}${submitComment}</form>`
    if ($('#comment-submit').length) {
      console.log('form already present')
    } else {
      $(commentForm).appendTo("#comments")
    }
  });

  $('#comments').on('click', '#comment-submit', function(event) {
    event.preventDefault();
    const body = $('textarea[name=comment_body]').val();
    const author = $('input[name=author]').val();
    const newComment = `<li>${body}<span class="author">${author}</span></li>`
    if (body) {
      $(newComment).appendTo('#comment_list');
      $('#new_comment').remove();
    };
  });
});
