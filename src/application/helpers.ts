export function getFromLocalStorage(key: string): any | null {
    const data = window.localStorage.getItem(key)
    if (data) {
        return JSON.parse(data);
    }

    return null;
}

export function saveToLocalStorage(key: string, data: any) {
    window.localStorage.setItem(key, JSON.stringify(data))
}

export function clearFromLocalStorage(key: string): void {
    window.localStorage.removeItem(key)
}