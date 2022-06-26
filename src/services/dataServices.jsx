    let catalog = [
    {   id:1,
        title: "apple",
        price: "201.00",
        img: "apple.jpeg",
        stock: 13,
        discount: 5,
        category: "fruits"
    },
    {id:2,
        title: "broccoli",
        price: "212.00",
        img: "broccoli.jpg",
        stock: 13,
        discount: 5,
        category: "veggies"
    },
    {id:3,
        title: "burs",
        price: "564.00",
        img: "burs.jpg",
        stock: 13,
        discount: 5,
        category: "fruits"
    },
    {id:4,
        title: "cherry",
        price: "123.00",
        img: "cherry.jpg",
        stock: 13,
        discount: 5,
        category: "fruits"
    },
    {id:5,
        title: "eggplant",
        price: "500.00",
        img: "eggplant.jpg",
        stock: 13,
        discount: 5,
        category: "fruits"
    },
    {id:6,
        title: "garlic",
        price: "230.00",
        img: "garlic.jpg",
        stock: 13,
        discount: 5,
        category: "veggies "
    },
    {id:7,
        title: "granade",
        price: "100.00",
        img: "granade.jpg",
        stock: 13,
        discount: 5,
        category: "fruits"
    },
    {id:8,
        title: "grapes",
        price: "260.00",
        img: "grapes.jpg",
        stock: 13,
        discount: 5,
        category: "fruits"
    },
    {id:9,
        title: "kuwi",
        price: "201.00",
        img: "kuwi.jpg",
        stock: 13,
        discount: 5,
        category: "fruits"
    },
    {id:10,
        title: "onion",
        price: "212.00",
        img: "onion.jpg",
        stock: 13,
        discount: 5,
        category: "fruits"
    },


];




class DataService{
    getCatalog(){
        return catalog;
    }
}

export default DataService;