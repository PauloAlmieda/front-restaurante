import React, { useState, useEffect } from 'react';

const GetCardapiosardapios = () => {
  const [items, setItems] = useState([]);
  //const items = ['card1','card2','card3','card4','card5']

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      axios
        .get("http://localhost:8000/api/vendas")
        .then((response) => setAllUser(response.data))
        .catch((err) => {
          console.error(err);
        });


      const response = await fetch('http://localhost:8000/api/cardapios');
      const data = await response.json();
      console.log(data)
      setItems(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Mostra</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetCardapiosardapios;