export async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/30')
        return response.json()
    } catch(error) {
        console.error('иди ты...казёл, у меня ниче нет для тебя')
        throw error
    }
}
