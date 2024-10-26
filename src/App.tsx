import React from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList';
import Business from './components/Business';

function App() {

  const MOCK_BUSINESS = [new Business ({
    image: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipcode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90
}), 
new Business ({
  image: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
name: 'Serious Pie',
address: 'Pike st',
city: 'Seattle',
state: 'WA',
zipcode: '98103',
category: 'Italian',
rating: 4.0,
reviewCount: 90
})];


  return (
    <div className="App">
      <BusinessList businesses={MOCK_BUSINESS}></BusinessList>
    </div>
  );
}

export default App;
