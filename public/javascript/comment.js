const commentFormHandler = async function(event) {
    event.preventDefault();
  
    const postId = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;
  

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
        alert("Did not add new blog");
      }
    };
  
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);