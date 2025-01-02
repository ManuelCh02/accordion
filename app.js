// 1. Need to get a list of nodes that are childre of the main-accordion class
// 2. Need to add an event listener to each of the nodes
// 3. When a node is clicked, it should insert a div with the class of active-section after the node that was clicked
// 4. Each section will have a different div with the class of active-section
// 5. If a section is active and another one is clicked, the active section should be removed and the new one should be added
// 6. If we clicked the same section it should remove the active section

// 1. Get the list of nodes
const accordion = document.querySelector('.main-accordion')
const accordionChildren = Array.from(accordion.children)
const grandSons = accordionChildren.map(element => Array.from(element.children))

// 2. Add an event listener to each of the nodes
accordionChildren.forEach((child) => {
    child.addEventListener('click', () => {
        validateListenerClicked(accordionChildren.indexOf(child))
    })
})

// Validates which section was clicked
function validateListenerClicked(index) {
    if (index !== -1) {
        addActiveSection(index)
    }
}

// 3, 4, 5. Create actives sections
const activeSection = document.createElement('div')
activeSection.classList.add('active-section')
const listOfContent = ['Content 1', 'Content 2', 'Content 3', 'Content 4', 'Content 5', 'Content 6']

function addActiveSection(index) {
    const getSection = accordionChildren[index]
    const existingActiveSection = getSection.nextElementSibling

    // 6. Remove the active section if the same section is clicked
    if (existingActiveSection && existingActiveSection.classList.contains('active-section')) {
        existingActiveSection.remove()
        return
    }

    activeSection.innerHTML = `<p>${listOfContent[index]}</p>`
    getSection.insertAdjacentElement('afterend', activeSection)
}

