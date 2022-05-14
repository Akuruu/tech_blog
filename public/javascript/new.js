const newFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const description = document.querySelector('textarea[name="post-description"]').value;

  const response = await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({ title, description }),
    headers: { "Content-Type": "application/json" }

  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Sorry, could not create post');
  }
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
