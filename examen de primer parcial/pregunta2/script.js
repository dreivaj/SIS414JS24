let list = [1, 3, 2, 1, 7, 8, 10];

const encontrarMediana = (list) => {
    list.sort((a, b) => {
        return a - b;
    });
    console.log(list[parseInt(list.length / 2)]);
};

encontrarMediana(list);