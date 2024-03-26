const token = 'nfp_JvWVRoggJj3Q4MPbRZsHqSodsZpqqB4Xd5d5';
const siteId = '130ed934-a516-48bd-b7d7-a9d84b58735f';

fetch(`https://api.netlify.com/api/v1/sites/${siteId}/submissions`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
    return response.json()

})
.then(data => {
  console.log(data.length); // Aquí puedes manejar la respuesta de la API
})
.catch(error => {
  console.error('There has been a problem with your fetch operation:', error);
})
