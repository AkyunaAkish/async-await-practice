const axios = require('axios');

const failToFetchUser = async (search = 'akyuna akish') => {
    const { data } = await axios.get(`https://api.github.com/se@arch/users?q=${search}`);
    
    // skips this line since previous line failed
    console.log('continued'); 

    return { data };
};

failToFetchUser().catch((e) => {
    // this runs because 
    // axios call fails
    console.error('error');
});