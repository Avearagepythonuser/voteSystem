export function hasVoted(arr, username) {
    return arr.some(obj=> obj.votes.includes(username))
}

export function getMaxVote(arr) {
    return Math.max(0,...arr.map(obj=>obj.votes.length))
}