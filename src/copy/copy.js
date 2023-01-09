export default function copy(id) {
    const copy = document.getElementById(id)
    if(copy.value) {
        copy.select()
        copy.setSelectionRange(0, 99999)
        document.execCommand('copy')
        alert(`${id} copiado com sucesso.`)
    }
}