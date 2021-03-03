import { ref } from 'vue'

const updateMatch = () => {
    const error = ref(null)
    const sendpatch = async (id, matchifo) => {
        try {
            // console.log(id)
            // console.log(matchifo)
            fetch('http://localhost:3000/matches/' + id, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(matchifo)
            })
        }
        catch (err) {
            error.value = err.message
        }
    }

    return { error, sendpatch }
}

export default updateMatch