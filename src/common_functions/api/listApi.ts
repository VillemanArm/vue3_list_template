import settings from '@/settings.json'

export default class ListApi {
    protected serverURL = settings.serverURL

    getList = async () => {
        fetch(`${this.serverURL}/new-research-add`).catch((error) => console.error('Error:', error))
    }

    addListItem = async (newResearch: FormData) => {
        fetch(`${this.serverURL}/new-research-add`, {
            method: 'POST',
            body: newResearch,
        }).catch((error) => console.error('Error:', error))
    }
}
