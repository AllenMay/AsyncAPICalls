
// function getit()
// {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: 'title=' + encodeURIComponent('My awesome new article') + '&body=' + encodeURIComponent('This is the text of my article'),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         referrer: 'no-referrer'
//     }).then(function (response) {

//         // The API call was successful!
//         if (response.ok) {
//             //return response.json();
//             let outItem = document.getElementById("out").val(response.json());
//             //let outItem = document.getElementById("out");
//             outItem.val("HELLO")
//         }

//         // There was an error
//         return Promise.reject(response);

//     }).then(function (data) {
//         // This is the JSON from our response
//         console.log(data);
//     }).catch(function (err) {
//         // There was an error
//         console.warn('Something went wrong.', err);
//     });
// }