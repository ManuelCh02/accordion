// 1. Need to get a list of nodes that are childre of the main-accordion class
// 2. Need to add an event listener to each of the nodes
// 3. When a node is clicked, it should insert a div with the class of active-section after the node that was clicked
// 4. Each section will have a different div with the class of active-section
// 5. If a section is active and another one is clicked, the active section should be removed and the new one should be added
// 6. If we clicked the same section it should remove the active section

// 1. Get the list of nodes
const accordion = document.querySelector('.main-accordion')
const accordionChildren = Array.from(accordion.children)

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
const listOfContent = [
    "Stark Dev Center is run by, you guessed it, yours truly—Tony Stark. It's a hub for tech brilliance, innovation, and a little bit of pizzazz.", 
    "It’s like having your own AI assistant, but instead of Jarvis, it’s me, guiding you through tech mastery, one epic roadmap at a time.", 
    "Do I need to say it? Cutting-edge roadmaps, groundbreaking guides, and, of course, the Stark seal of genius.", 
    "Of course. It's open to everyone, whether you’re building suits, apps, or anything in between. Just make sure to give credit where it's due—me.", 
    "Easy. Pick your goal, follow my templates, and add your flair. You'll feel like you’re building your own arc reactor—minus the explosions.", 
    "Absolutely. But hey, I don’t count the stars; I shine brighter than all of them combined."
] // Yeah, I fill it with random text using AI 🫡

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

