import { faker } from "@faker-js/faker";
import niceColors from 'nice-color-palettes';
faker.seed(1);

const colors = [
  ...niceColors[1].slice(1, niceColors[1]),
  ...niceColors[55].slice(0, 3),

];

const data=[
  {
    id:0,
    image:'https://cdn-icons-png.flaticon.com/128/434/434941.png'
  },
  {
    id:1,
    image: 'https://cdn-icons-png.flaticon.com/128/434/434931.png'
  },
  {
    id:2,
    image:'https://cdn-icons-png.flaticon.com/128/434/434956.png'
  },
  {
    id:3,
    image:'https://cdn-icons-png.flaticon.com/128/434/434947.png'
  },
  {
    id:4,
    image:'https://cdn-icons-png.flaticon.com/128/434/434939.png'
  },
  {
    id:5,
    image: 'https://cdn-icons-png.flaticon.com/128/434/434950.png'
  },
  {
    id:6,
    image: 'https://cdn-icons-png.flaticon.com/128/434/434924.png'
  }
];


export const detailsIcons = [
  {color:'#9FD7F1', icon:'isv'},
  {color:'#F3B000', icon:'trophy'},
  {color:'#F2988F', icon:'edit'},
];


export default data.map((item, index)=>({
  ...item,
  key: faker.string.uuid(),
  color: colors[index % colors.length],
  name: faker.person.fullName(),
  jobTitle: faker.person.jobTitle(),
  categories: [...Array(3).keys()].map(()=>{
    return{
      key: faker.string.uuid(),
      title: faker.person.jobType(),
      subcats:[...Array(3).keys()].map(faker.person.jobType)
    };
  }),

}));



