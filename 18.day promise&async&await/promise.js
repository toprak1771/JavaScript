const test = (deneme) => {
  setTimeout(() => {
    deneme("Hata oldu", []);
  }, 2000);
};

const cb = (err, data) => {
  if (err) {
    console.log("err:", err);
  } else {
    console.log("data:", data);
  }
};

//test(cb);
const object = {
  id: 1,
  name: "Toprak",
  city: "Çanakkale",
};

const promise = new Promise((resolve, reject) => {
  resolve(object);
})
  .then((response) => {
    console.log("response:", response);
  })
  .catch((err) => console.log(err));

//console.log(promise);

// promise.then((response) => {
//     console.log("response:",response);
// }).catch((err) => console.log(err))

//console.log(fetch('https://jsonplaceholder.typicode.com/posts'));

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((test) => console.log(test))
  .catch((err) => console.log(err));


  const getData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log("data:",data);
    } catch (error) {
        console.log(error);
    }
  };

  getData();