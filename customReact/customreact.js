function customRender(reactElement, mainContainer){
    const demElement = document.createElement(reactElement.type)

    demElement.innerHTML = reactElement.children
    domElement.setAttribute('hred', reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    mainContainer.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blanl'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)