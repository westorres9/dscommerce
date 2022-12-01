import { Product } from "../types/Product";


export function findAll() : Product[] {
    return products;
}

export function findById(id: number) : Product | undefined {
    return products.find(x => x.id === id);
}

let products : Product[] = [
    {
        "id": 1,
        "name": "The Lord of the Rings",
        "price": 90.5,
        "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "categories": [
            {
                "id": 1,
                "name": "Livros"
            }
        ]
    },
    {
       "id": 2,
       "name": "Smart TV",
       "price": 2190.0,
       "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "categories": [
           {
               "id": 2,
               "name": "Eletrônicos"
           },
           {
               "id": 3,
               "name": "Computadores"
           }
       ]
    },
    {
        "id": 7,
        "name": "PC Gamer X",
        "price": 1350.0,
        "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/7-big.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "categories": [
            {
                "id": 2,
                "name": "Computadores"
            }
        ]
     },
    {
        "id": 15,
        "name": "PC Gamer Weed",
        "price": 2200.0,
        "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/15-big.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "categories": [
            {
                "id": 2,
                "name": "Computadores"
            }
        ]
    },
    {
        "id": 21,
        "name": "PC Gamer Tx",
        "price": 1680.0,
        "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/21-big.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "categories": [
            {
                "id": 2,
                "name": "Computadores"
            }
        ]
    },
    {
        "id": 17,
        "name": "PC Gamer Turbo",
        "price": 1280.0,
        "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/17-big.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "categories": [
            {
                "id": 2,
                "name": "Computadores"
            }
        ]
    },
    {
        "id": 20,
        "name": "PC Gamer Tr",
        "price": 1650.0,
        "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/20-big.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "categories": [
            {
                "id": 2,
                "name": "Computadores"
            }
        ]
    },
    {
        "id": 9,
        "name": "PC Gamer Tera",
        "price": 1950.0,
        "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/9-big.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "categories": [
            {
                "id": 2,
                "name": "Computadores"
            }
        ]
    },
    {
        "id": 13,
        "name": "PC Gamer Plus",
        "price": 1350.0,
        "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/13-big.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "categories": [
            {
                "id": 2,
                "name": "Computadores"
            }
        ]
    },
    {
        "id": 11,
        "name": "PC Gamer Nitro",
        "price": 1450.0,
        "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/11-big.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "categories": [
            {
                "id": 2,
                "name": "Computadores"
            }
        ]
    },
    {
        "id": 23,
        "name": "PC Gamer Min",
        "price": 2250.0,
        "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/23-big.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "categories": [
            {
                "id": 2,
                "name": "Computadores"
            }
        ]
    },
    {
        "id": 16,
        "name": "PC Gamer Max",
        "price": 2340.0,
        "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/16-big.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "categories": [
            {
                "id": 2,
                "name": "Computadores"
            }
        ]
    },
    {
        "id": 18,
        "name": "PC Gamer Hot",
        "price": 1450.0,
        "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/18-big.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "categories": [
            {
                "id": 2,
                "name": "Computadores"
            }
        ]
    }
]