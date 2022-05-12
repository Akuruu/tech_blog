const commentFormHandler = async function (event) {
  event.preventDefault();

  const postId = document.querySelector('input[name="post-id"]').value;
  const body = document.querySelector('textarea[name="comment-body"]').value;

  // Comment function
  const response = await fetch("/api/", {
    method: "POST",
    body: JSON.stringify({ post_id: postId, body }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace(`/posts/${postId}`);
  } else {
    alert("Sorry, could not comment");
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);