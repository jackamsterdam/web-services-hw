// $(() => {
//     $('#getDataBtn').click(function() {
//         getUsersFromjsonplaceholder()
//     })


//     function getUsersFromjsonplaceholder() {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(response => response.json())
//             .then(json => onUsersFromjsonplaceholderReceived(json))
//     }

//     function onUsersFromjsonplaceholderReceived(json) {
//         debugger
//         $('.inject').html(json)
//     }


// })

let btn
let inject
let inputId
let btnId
let injectComment
let name
let email
let response

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        onInit()
    }
}

function onInit() {
    btn = document.querySelector('#getDataBtn')
    inject = document.querySelector('.inject')
    btn.addEventListener('click', getUsersFromjsonplaceholder)
    inputId = document.querySelector('#yourId')
    btnId = document.querySelector('#getId')
    btnId.addEventListener('click', getComment.bind(null, inputId))
    injectComment = document.querySelector('#injectComment')
    name = document.querySelector('#name')
    email = document.querySelector('#email')
    response = document.querySelector('#response')
}

function getUsersFromjsonplaceholder() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            return response.json()
        })
        .then((postsData) => {
            onUsersFromjsonplaceholderReceived(postsData)
        })
}

function onUsersFromjsonplaceholderReceived(json) {
    // debugger
    console.log('hi')
        // inject.innerHTML = json[0].title

    json.forEach(comment => {
        inject.innerHTML += comment.title + '<br>'
            // console.log(comment.title)
    });

}

// קרוא בתכנית שלכם גם את התגובות והציגו אותן מתחת לפוסט כאשר יופיע השם של מי שכתב והאימייל והבויד
function getComment(input) {
    console.log(input.value)
    let valueChosen = input.value
    fetch(`https://jsonplaceholder.typicode.com/posts/${valueChosen}/comments`)
        .then(response => {
            return response.json()
        })
        .then((postData) => {
            onUsersFromjsonplaceholderReceivedCommentInput(postData)
        })
}

function onUsersFromjsonplaceholderReceivedCommentInput(json) {
    console.log(json)

    json.forEach(comment => {
        // debugger
        // injectComment.innerHTML += comment.postId
        email.innerHTML = comment.email
        name.innerHTML = comment.name
        response.innerHTML = comment.body
    })
}