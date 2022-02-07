const commentPostHandler = async (event) => {
    event.preventDefault();
    const body = document.querySelector('#commentText').value.trim();
    const post_id = window.location.toString().split('/').at(-1)
    // const id = document.querySelector('textarea[name="inputField"]').value
    console.log('click', body, post_id);

    if (body) {
        const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({body, post_id}),
        headers: {
            'Content-Type': 'application/json',
          },
    })

    if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create comment');
      }
    // document.location.reload();
  }};

  document
  .querySelector(".create-comment")
  .addEventListener("submit", commentPostHandler)
  




    // const content = document.querySelector('#post-content').value.trim();
    //     console.log(content)
    // if (title && content) {
    //     if (event.target.hasAttribute("data-id")){
    //         const id = event.target.getAttribute("data-id")
    //     console.log(id)
    //     console.log(content)
    //     const response = await fetch(`/api/posts/${id}`, {
    //     method: 'PUT',
    //     body: JSON.stringify({ title, content }),
    //     headers: { 'Content-Type': 'application/json' },
    //   });
  
    //   if (response.ok) {
    //     document.location.replace('/profile');
    //   } else {
    //     alert('Failed to update.');
    //   }
    // }
    // }