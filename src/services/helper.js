export const arrayToObject = (list, keyField = 'id') => {
    return Object.assign(
      {},
      ...list.map((item, index) => ({ [item[keyField]]: { ...item, index } }))
    );
  };
  
  export const objectToArray = objectList => {
    const list = [];
  
    Object.values(objectList).forEach(item => {
        debugger
      list[item.name] = item.image;
    });
  
    return list;
  };
  