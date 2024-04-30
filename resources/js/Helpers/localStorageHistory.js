export function addToHistory(cep, cidade, location, current) {
    let history = JSON.parse(localStorage.getItem("queryHistory")) || [];

    history.push({ cep, cidade, location, current });

    localStorage.setItem("queryHistory", JSON.stringify(history));
}

export function retrieveHistory() {
    let history = JSON.parse(localStorage.getItem("queryHistory"));

    return history;
}
