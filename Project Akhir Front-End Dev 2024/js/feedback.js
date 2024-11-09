document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const feedback = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        bioskop: document.getElementById('bioskop').value,
        rating: document.querySelector('input[name="rating"]:checked').value,
        comments: document.getElementById('comments').value
    };

    let feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
    feedbackList.push(feedback);
    localStorage.setItem('feedbackList', JSON.stringify(feedbackList));

    alert("Terima kasih! Feedback Anda berhasil disimpan.");
    document.getElementById('feedbackForm').reset();
});
