export const calcChapterCount = (length)=> {
    return Math.ceil(length / 20)
}
export function findCommonValues(xs, ys) {
    const set = new Set(ys)
    return xs.filter((x) => set.has(x))
}