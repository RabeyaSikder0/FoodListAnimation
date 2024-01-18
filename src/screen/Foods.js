import {faker}  from '@faker-js/faker';
import nicecolors from 'nice-color-palettes';
faker.seed(1);

export const ORANGE ='#FB9B06';

const data=[
    {
        type:'Soup',
        image:'https://cdn-icons-png.flaticon.com/128/754/754424.png'
    },
    {
        type:'Salad',
        image:'https://cdn-icons-png.flaticon.com/128/9273/9273859.png'
    },
    {
        type:'Rice',
        image:'https://cdn-icons-png.flaticon.com/128/135/135669.png'
    },
    {
        type:'Sushi',
        image:'https://cdn-icons-png.flaticon.com/128/2346/2346236.png'
    },
    {
        type:'Spaguetti',
        image:'https://cdn-icons-png.flaticon.com/128/1349/1349845.png'
    },
    {
        type:'Pizza',
        image:'https://cdn-icons-png.flaticon.com/128/10564/10564856.png'
    },
    {
        type:'Burger',
        image:'https://cdn-icons-png.flaticon.com/128/2674/2674087.png'
    },
    {
        type:'Soup',
        image:'https://cdn-icons-png.flaticon.com/128/754/754424.png'
    },
    {
        type:'Salad',
        image:'https://cdn-icons-png.flaticon.com/128/9273/9273859.png'
    },
    {
        type:'Rice',
        image:'https://cdn-icons-png.flaticon.com/128/135/135669.png'
    },
    {
        type:'Sushi',
        image:'https://cdn-icons-png.flaticon.com/128/2346/2346236.png'
    },
    {
        type:'Spaguetti',
        image:'https://cdn-icons-png.flaticon.com/128/1349/1349845.png'
    },
    {
        type:'Pizza',
        image:'https://cdn-icons-png.flaticon.com/128/10564/10564856.png'
    },
    {
        type:'Burger',
        image:'https://cdn-icons-png.flaticon.com/128/2674/2674087.png'
    }
];


const colors = nicecolors[1];
export const tabs = [
    'Today',
    'Chips',
    'Fish',
    'Tea',
    'Burger',
    'Coffee',
    'Drinks',
    'Breakfast',
];

export default data.map((item, index) => ({
            ...item,
            key: faker.string.uuid(),
            subType: faker.commerce.productName(),
            color:`${colors[index % colors.length]}66`,
            fullcolor: colors[index % colors.length],
            description: [...Array(2).keys()]
                .map(faker.commerce.productDescription).join('.'),
            price:`$${(faker.finance.amount(200)+50)/100}`,
            subcategories: faker.helpers.shuffle(data).slice(0,3),
            
}));
    
        
    
export const popularFood = faker.helpers.shuffle(data).map((item) =>({
    ...item,
    key: faker.string.uuid(),
    rating: (faker.finance.amount(30)+20)/10,
    price: `$${(faker.finance.amount(200)+50)/100}`,
}));




