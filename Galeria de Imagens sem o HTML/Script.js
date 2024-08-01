// script.js
document.addEventListener('DOMContentLoaded', () => {
    const modalImage = document.getElementById('modalImage');
    const photoModal = new bootstrap.Modal(document.getElementById('photoModal'));

    document.querySelectorAll('.gallery img').forEach(img => {
        img.addEventListener('click', () => {
            const src = img.getAttribute('src');
            modalImage.setAttribute('src', src);
            photoModal.show();
        });
    });
});
