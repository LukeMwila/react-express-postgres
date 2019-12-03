import React from 'react';
import './App.css';

function App() {
  const [toDoItems, updateToDoItems] = React.useState([]);

  React.useEffect(() => {
    const getToDoItems = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_TO_DO_ITEMS_API}/items`
      );

      const items = await response.json();
      if (items && Array.isArray(items) && items.length) {
        // @ts-ignore
        updateToDoItems(items);
      }
    };
    getToDoItems();
  }, []);

  return (
    <div>
      {toDoItems && toDoItems.length
        ? toDoItems.map((item: any, i: number) => {
            return (
              <div key={i}>
                {`${item.item_name}`}
                <br />
              </div>
            );
          })
        : 'No items to be done'}
    </div>
  );
}

export default App;
