const postdata = async (url, data) => {
   let res =await fetch(url, {
      mothod: "POST",
      header: {
         'Content-Type': 'application/json'
      },
      body: data
   });

   return await res.json();
};

async function getResource(url) { 
   let res = await fetch(url);

   if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
   }

   return await res.json();
}

export {postData};
export {getResourse};

//Запрос данных через определенный url, выведение ошибки при неудаче 