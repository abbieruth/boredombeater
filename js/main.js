document.querySelector('button').addEventListener('click', getActivity)

function getActivity() {
    let type = document.querySelector('input').value.toLowerCase();
    fetch(`http://www.boredapi.com/api/activity?type=${type}`)
    .then(res => res.json()) // parse as JSON
    .then(data => {
        console.log(data);
        document.querySelector('#activity').innerText = data.activity;
        document.querySelector('#participants').innerText = `${data.participants} participant(s) needed`;
    })
    .catch(err => {
        console.log(`error ${err}`);
    })
    alert("I'm sorry. Due to technical difficulties, we are not able to display this information at this time.")
}