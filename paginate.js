const paginate = (follower) => {
    const itemPerPage = 9;
    const numberOfPages =Math.ceil( follower.length/itemPerPage);
    // console.log(numberOfPages);

    const newFollowers = Array.from({length:numberOfPages},(_,index)=>{
        const start = index*itemPerPage;
        return follower.slice(start,start+itemPerPage)
    });
    return newFollowers;
}

export default paginate
