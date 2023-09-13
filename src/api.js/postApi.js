export async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        return response.json()
    } catch(error) {
        console.error('у меня нет для тебя данных')
        throw error
    }
}
