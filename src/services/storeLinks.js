
// Buscar os links salvos.

export async function getLinkSave(key){
    const myLinks = await localStorage.getItem(key);
    
    let linksSaves = JSON.parse(myLinks) || [];
    
    return linksSaves;
}


// Salvar um link no localStorage.
export async function saveLink(key, newLink){
    let linksStored = await getLinkSave(key);

    // Se já tiver um link salvo com algum ID eu não vou deixar duplicar
    const hasLink = linksStored.some( link => link.id === newLink.id)

    if(hasLink){
        console.log('ESSE LINK JÁ EXISTE NA SUA LISTA!')
        return;
    }

    // Adicionar esse novo link na lista. 
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log("LINK SALVO COM SUCESSO!")

}

// Deletar algum link salvo
export function deleteLink(links, id){

    let myLinks = links.filter(item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))

    return myLinks;

}
