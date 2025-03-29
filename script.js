const modeButton = document.getElementById('modeButton');
        const body = document.body;

        modeButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            modeButton.classList.toggle('dark-mode');

            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('mode', 'dark');
                modeButton.textContent = "Light Mode";
            } else {
                localStorage.setItem('mode', 'light');
                modeButton.textContent = "Dark Mode";
            }
        });

        if (localStorage.getItem('mode') === 'dark') {
            body.classList.add('dark-mode');
            modeButton.classList.add('dark-mode');
            modeButton.textContent = "Light Mode";
        } else {
            modeButton.textContent = "Dark Mode";
        }
    