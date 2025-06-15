async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element
        const userList = document.createElement('ul');

        // Loop through each user and create <li> items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the <ul> to the data container
        dataContainer.appendChild(userList);

        // You will loop through `users` and display them next
    } catch (error) {
        console.error('Error fetching data:', error);
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}
document.addEventListener('DOMContentLoaded', fetchUserData);