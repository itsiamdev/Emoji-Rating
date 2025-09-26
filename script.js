const emojis = document.querySelectorAll('.emoji');
const selectedRating = document.getElementById('selected-rating');
let currentRating = 0;

emojis.forEach(emoji => {
    emoji.addEventListener('mouseover', () => {
        const rating = parseInt(emoji.getAttribute('data-rating'));
        highlightEmojis(rating);
    });

    emoji.addEventListener('mouseout', () => {
        if (currentRating === 0) {
            resetHighlights();
        } else {
            highlightEmojis(currentRating);
        }
    });

    emoji.addEventListener('click', () => {
        currentRating = parseInt(emoji.getAttribute('data-rating'));
        selectedRating.textContent = currentRating;
        highlightEmojis(currentRating);
    });
});

function highlightEmojis(rating) {
    emojis.forEach(emoji => {
        const emojiRating = parseInt(emoji.getAttribute('data-rating'));
        if (emojiRating <= rating) {
            emoji.classList.add('selected');
        } else {
            emoji.classList.remove('selected');
        }
    });
}

function resetHighlights() {
    emojis.forEach(emoji => {
        emoji.classList.remove('selected');
    });
}