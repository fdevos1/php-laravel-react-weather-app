export function addToHistory(cep, cidade, location, current, date) {
    let history = JSON.parse(localStorage.getItem("queryHistory")) || [];

    history.push({ cep, cidade, location, current, date });

    localStorage.setItem("queryHistory", JSON.stringify(history));
}

export function retrieveHistory() {
    let history = JSON.parse(localStorage.getItem("queryHistory"));

    return history;
}
