
document.getElementById('removeDup').addEventListener('click',()=>{
    const fields    = document.getElementById('dup_before').value
    const fieldsSet = new Set(fields.split('\n').map(item=>item.trim()).filter(item=>item))
    
    let result = ''
    fieldsSet.forEach(item=>{
        result += item+'\n'
    })

    document.getElementById('dup_after').value = result
}) 

document.getElementById('dup_after').addEventListener('click',()=>{
    const resultValues = document.getElementById('dup_after').value

    let results = ''
    resultValues.split('\n').forEach(item=>{
        results += item+'\n'
    })
    navigator.clipboard.writeText(results)
})

document.getElementById('dup_cleaner').addEventListener('click',()=>{
    document.getElementById('dup_before').value = ''
    document.getElementById('dup_after').value = ''
})