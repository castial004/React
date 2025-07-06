console.log("hello")
const root = document.getElementById('root')
const element = {
    type:'a',
    props:{
        href:'google.com',
        target:'_blank'
    },
    value:'click here to go to google'
}

function Render(htmlElement,targetId){
    const tag = document.createElement(htmlElement.type)
    tag.innerHTML = htmlElement.value
    for (const prop in htmlElement.props) {
        if(prop === 'children') continue
        tag.setAttribute(prop,htmlElement.props.prop)
    }
    targetId.appendChild(tag)
}
Render(element,root)

/*
    funnction oldRender(htmlElement,targetId){
        const tag = document.createElement(htmlElement.type)
        tag.innerHTML = htmlElement.value
        tag.setAttribute('href',htmlElement.props.href)
        tag.setAttribute('target',htmlElement.props.target)
        targetId.appendChild(tag)
    }
*/
    
    