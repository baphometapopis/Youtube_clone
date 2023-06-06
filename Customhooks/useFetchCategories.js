// import React, {useState,useEffect} from 'react';
// import {Apilinks} from '../Constant';

// const FetchCategories =  () => {
//     const [data, setdata] = useState([]);

// const Fetch= async ()=>{
    
//    await fetch(
//     Apilinks.CATEGORIES_HTTP +
//       new URLSearchParams({
//         key: Apilinks.API_KEY,
//         part: 'snippet',
//         regionCode:'IN',
//       }),
//   )
//     .then(res => res.json())
//     .then(data => {
//         setdata(data.items);

//       data.items.forEach(item => {
//         // getChannelIcon(item);
//         // console.log(item);

//         // fetchComments(item.id);
//       });
//     })
//     .catch(err => console.log(err));
// }

//     useEffect(() => {
//         Fetch();
//       }, []);
    
//       return {data};

// };


// export default FetchCategories;
