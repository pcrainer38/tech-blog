const newFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment-content').value.trim();


    if (content) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace(`/profile`);
        } else {
            alert('Failed to create comment.');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        
        const id = event.target.getAttribute('data-id');
        
        const response = await fetch(`/api/comment/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete comment');
        }
    }
};


document.querySelector('.comment-content')
document.addEventListener('submit', newFormHandler);


document.querySelector('.comment-list')
document.addEventListener('click', delButtonHandler);