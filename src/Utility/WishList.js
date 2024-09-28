const getStoredWishListApplication = () =>{
    const storedWishListApplication = localStorage.getItem('wish-applications');
    if(storedWishListApplication){
        return JSON.parse(storedWishListApplication);
    }
    return [];
}



const saveWishListApplication = id =>{
    const storedWishListApplication = getStoredWishListApplication();
    const exists = storedWishListApplication.find(jobId => jobId === id);
    if(!exists){
        storedWishListApplication.push(id);
        localStorage.setItem('wish-applications', JSON.stringify(storedWishListApplication))
    }
}

export {saveWishListApplication,getStoredWishListApplication}