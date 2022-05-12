const { response } = require("express");

const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  // Edit button function
  const response = await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({ title, body }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Sorry, your post could not be updated')
  }

};

// Delete button function.
const deleteClickHandler = async function () {
  const response = await fetch(`/api/post/${postId}`, {

    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Sorry, your post could not be deleted')
  }


  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
