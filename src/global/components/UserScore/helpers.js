export const getScoreColor = (score) => {
    if (typeof score !== 'number') return '#757575'

    if (score >= 75) return '#4caf50'
    if (score < 75 && score > 40) return '#ffb74d'
    if (score <= 40 && score > 20) return '#ff9800'
    if (score <= 20 && score >= 1) return '#f44336'

    return '#757575'
}
