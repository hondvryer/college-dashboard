export const sortByKey = (list, key) => {
    list && key && list.sort((a, b) => (a.key > b[key]) ? 1 : -1)
    return list;
}