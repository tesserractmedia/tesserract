export function searchById(data, id) {
    const length = data.length;
    for (let i = 0; i < length; i++) {
        if (data[i].id == id) {
            return data[i];
        }
    }
}

export function suggestVideos(data, id, tags) {
    var suggestion = [];
    const length = data.length;
    for (let i = 0; i < length; i++) {
        if (data[i].tags.some((item) => tags.includes(item))) {
            if (data[i].id != id) {
                suggestion.push(data[i]);
            }
        }
    }
    if (suggestion.length < 5) {
        for (let i = 0; i < (length || 5); i++) {
            suggestion.push(data[i]);
        }
    }
    return suggestion;
}