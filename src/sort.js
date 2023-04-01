const arrNum = [2, 4, 23, 1];
const arrStr = ["a"];
const arrObj = [
  { title: "a", id: 2 },
  { title: "a", id: 3 },
  { title: "a", id: 1 },
];

function sortImpl(data) {
  const result = data.sort((a, b) => {
    if (a.id > b.id) {
        return -1
    }
  
  });
  return result;
}

console.log(sortImpl(arrObj));
