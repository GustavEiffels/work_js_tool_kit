 
let rfcInfo = []
const request_eai_header = document.getElementById('request_eai_header')
const request_eai_body   = document.getElementById('request_eai_body')
const request_rfc_input  = document.getElementById('request_rfc_id')

document.getElementById('rfc_copy_btn').addEventListener('click', () => {
    const textArea = document.getElementById('request_rfc_id')
    navigator.clipboard.writeText(textArea.value)
})

document.getElementById('mail_header_btn').addEventListener('click', () => {
    const textArea = document.getElementById('request_eai_header')
    navigator.clipboard.writeText(textArea.value)
})
document.getElementById('mail_body_btn').addEventListener('click', () => {
    const textArea = document.getElementById('request_eai_body')
    navigator.clipboard.writeText(textArea.value)
})

document.addEventListener('click',()=>{
    fetch(['./RFC_LIST.json']).then(res=> res.json()).then(data=>{
        rfcInfo = data;
        console.log(rfcInfo)
    })
})


const request_eai_input_handler = 
    document.getElementById('request_eai_input')
    .addEventListener('input',(event)=>{
    const inputValue   = event.target.value
    const convertValue = 'IF-'+inputValue.replace(/(\d+)/, '-$1')
    const result = rfcInfo.find(item => item.Name === convertValue.toLocaleUpperCase())
    request_eai_header.textContent = '인터페이스 '+result.Name+' 수정 요청'
    request_rfc_input.value = result.RFC__c 
    request_eai_body.textContent = 
`안녕하세요 SBT Global 성서욱 입니다.
                                    
인터페이스 : ${result.Name}
RFC : ${result.RFC__c}
=> ${result.InterfaceDescription__c}
                                    
정의서 수정되어 개발 요청 드립니다.
                                    
정의서 함께 전달 드립니다.
                                    
확인 부탁드립니다.
감사합니다.`;

})

