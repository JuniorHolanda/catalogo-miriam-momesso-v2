export default function slugify(text : string) {
    return text
        .toLowerCase()
        .normalize('NFD')                 // separa acentos
        .replace(/[\u0300-\u036f]/g, '')  // remove acentos
        .replace(/[^a-z0-9\s-]/g, '')     // remove caracteres especiais
        .trim()
        .replace(/\s+/g, '-')             // troca espaços por hífen
}