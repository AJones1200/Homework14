const editPostHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
        console.log(content)
    if (title && content) {
        if (event.target.hasAttribute("data-id")){
            const id = event.target.getAttribute("data-id")
        console.log(id)
        console.log(content)
        const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to update.');
      }
    }
    }
  };




  document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editPostHandler)