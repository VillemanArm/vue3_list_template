export default class ListApi {
    protected serverURL = import.meta.env.VITE_SERVER_URL

    getList = async () => {
        const response = fetch(`${this.serverURL}list`)
            .then((response) => response.json())
            .catch((error) => console.error('Error:', error))

        return response
    }

    addListItem = async (newResearch: FormData) => {
        fetch(`${this.serverURL}/new-research-add`, {
            method: 'POST',
            body: newResearch,
        }).catch((error) => console.error('Error:', error))
    }
}
