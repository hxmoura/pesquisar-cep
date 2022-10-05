export default function copy(id) {
    const copy = document.getElementById(id)
    copy.select()
    copy.setSelectionRange(0, 99999)
    document.execCommand('copy')
    alert(`${id} foi copiado com sucesso.`)
}