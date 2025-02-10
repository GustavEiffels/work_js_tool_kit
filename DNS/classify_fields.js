// 
document.getElementById('convert_arrow').addEventListener('click',()=>{
    // after 
    const targetArea  = document.getElementById('after_fields').value
    const targetSet   = new Set(targetArea.split('\n').map(item=>item.trim()).filter(item=>item))
    

    // before
    const itemArea = document.getElementById('before_fields').value
    itemArea.split('\n').forEach(item=>{
        targetSet.delete(item.trim())
    })

    // assign unique
    let uniqueArea = ''
    targetSet.forEach(item=>{
        console.log('item : '+item)
        uniqueArea += item+'\n'
    })

    document.getElementById('unique_fields').value = uniqueArea.trim()
    console.log('afterData Set:'+Array.from(targetSet));
})


// 
document.getElementById('unique_fields').addEventListener('click',()=>{
    const uniqueArea = document.getElementById('unique_fields').value

    let convertItemList = ''
    uniqueArea.split('\n').forEach(item=>{
        convertItemList += `fields.add('${item}');\n`;
    })

    navigator.clipboard.writeText(convertItemList)
})