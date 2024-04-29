export function addToHistory(query, response) {
    let history = JSON.parse(localStorage.getItem("queryHistory")) || [];

    history.push({ query, response });

    localStorage.setItem("queryHistory", JSON.stringify(history));
}

export function retrieveHistory() {
    let history = JSON.parse(localStorage.getItem("queryHistory"));

    return history;
}
