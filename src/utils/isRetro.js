function isRetro(releaseDate, referenceDate = new Date()) {

    let age = referenceDate.getFullYear() - releaseDate.getFullYear()
    const monthDiff = referenceDate.getMonth() - releaseDate.getMonth()
    const dayDiff = referenceDate.getDate() - releaseDate.getDate()

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--
    }

    return age >= 20
}
