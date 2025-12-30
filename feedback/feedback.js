const feedbackForm = document.getElementById('feedbackForm');
const feedbackList = document.getElementById('feedbackList');
const clearBtn = document.getElementById('clearBtn');

document.addEventListener('DOMContentLoaded', displayFeedbacks);

feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const rating = document.querySelector('input[name="rating"]:checked').value;
    const name = document.getElementById('userName').value;
    const comment = document.getElementById('userComments').value;
    const date = new Date().toLocaleString('pt-BR', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    });

    const feedbackEntry = { rating, name, comment, date };

    saveFeedback(feedbackEntry);
    
    feedbackForm.reset();
    
    displayFeedbacks();
});

function saveFeedback(entry) {
    let feedbacks = JSON.parse(localStorage.getItem('skillPathData')) || [];
    feedbacks.push(entry);
    localStorage.setItem('skillPathData', JSON.stringify(feedbacks));
}

function displayFeedbacks() {
    let feedbacks = JSON.parse(localStorage.getItem('skillPathData')) || [];
    feedbackList.innerHTML = '';

    if (feedbacks.length === 0) {
        feedbackList.innerHTML = '<p style="color: #9ca3af; font-style: italic;">Nenhum feedback ainda.</p>';
        return;
    }

    feedbacks.reverse().forEach(item => {
        const card = document.createElement('div');
        card.className = 'feedback-card';
        card.innerHTML = `
            <strong>${item.rating} ${item.name}</strong>
            <small>${item.date}</small>
            <p>${item.comment}</p>
        `;
        feedbackList.appendChild(card);
    });
}

clearBtn.addEventListener('click', () => {
    if (confirm("Tem certeza que deseja apagar todos os feedbacks salvos no seu navegador?")) {
        localStorage.removeItem('skillPathData');
        displayFeedbacks();
    }
});