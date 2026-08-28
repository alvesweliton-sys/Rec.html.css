 let likes = 0;
        const btnLike = document.getElementById('btnLike');
        const contador = document.getElementById('contador');

        btnLike.addEventListener('click', () => {
            likes++;
            contador.textContent = likes;
        });