const commentPostHandler = async (event) => {
    event.preventDefault();
    const comment = document.querySelector('#commentText').value.trim();
    const id = document.querySelector('textarea[name="inputField"]').value
    console.log('click', comment, id);

    await fetch("/api/comments", {
        method: "Post",
        body: JSON.stringify({comment})
    })

    // document.location.reload();
  };

  document
  .querySelector("#commentSubmitBtn")
  .addEventListener("click", commentPostHandler)
  




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