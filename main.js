const dateNow = new Date();

    const dateLabel = document.querySelector('#date');

    dateLabel.innerHTML = dateNow.toLocaleDateString();

