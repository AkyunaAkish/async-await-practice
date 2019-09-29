const axios = require('axios');

const fetchUser = async (search = 'akyuna akish') => {
    const { data } = await axios.get(`https://api.github.com/search/users?q=${search}`);

    // this line runs because previous line succeeds
    console.log('continued');

    return data;
};

const userData = fetchUser().catch((e) => {
    // this doesn't run because
    // axios call succeeds
    console.error('error');
});

// this is a pending promise so a 
// .then would still be needed to 
// access this info outside of an 
// async function's scope
console.log('userData', userData); 