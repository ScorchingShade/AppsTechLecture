//JSON - this is a way to define our objects or data in a website
//products -- data

//1 . name -
//2. price -
//3. rating -
//4. img

//we are using an array to define more than one product
//0 1 ..

const data = {

    products:[
        //1 product
        // data.products[0].name = 'Puma Shirt'
        // let me call each object as item/singleProduct
        // for ( starting from 0, incrementing the value by 1, moving till end of products array)
        // for every singleProduct, do the following
        // singleProduct.name
        {
            _id:'1',
            name:'Adidas Shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price: 2000,
            brand: 'Puma',
            rating:4.5,
            numReviews: 10,
            description: 'high quality production'

        },
        //2 product
        {
            _id:'2',
            name:'Arrow Shirt',
            category:'Shirts',
            image:'/images/p2.jpg',
            price: 20100,
            brand: 'Puma',
            rating:4,
            numReviews: 80,
            description: 'high quality production'

        },
        //3
        {
            _id:'3',
            name:'Premium Arrow Shirt',
            category:'Shirts',
            image:'/images/p3.jpg',
            price: 12000,
            brand: 'Arrow',
            rating:5,
            numReviews: 190,
            description: 'high quality production'

        },
        //4
        {
            _id:'4',
            name:'Arrow Pants',
            category:'Pants',
            image:'/images/p4.jpg',
            price: 8000,
            brand: 'Puma',
            rating:3.5,
            numReviews: 10,
            description: 'high quality pants'

        },
        //5
        {
            _id:'5',
            name:'Puma Pants',
            category:'Pants',
            image:'/images/p5.jpg',
            price: 12000,
            brand: 'Puma',
            rating:4.5,
            numReviews: 10,
            description: 'high quality production'

        },
        //6
        {
            _id:'6',
            name:'Lacostse pants',
            category:'Pants',
            image:'/images/p6.jpg',
            price: 13000,
            brand: 'Lacostse',
            rating:4,
            numReviews: 10,
            description: 'high quality pants'

        }

    ]



}

export default data;