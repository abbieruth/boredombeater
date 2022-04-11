document.querySelector('button').addEventListener('click', getActivity)

function getActivity() {
    let type = document.querySelector('input').value
    fetch(`http://www.boredapi.com/api/activity?type=${type}`)
    .then(res => res.json()) // parse as JSON
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.activity
        document.querySelector('h3').innerText = data.type
        document.querySelector('#participants').innerText = `${data.participants} participant(s) needed`
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}