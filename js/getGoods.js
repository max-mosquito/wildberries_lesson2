const getGoods = () => {
  const links = document.querySelectorAll('.navigation-link');

  const getData = () => {
    fetch('/wildberries_lesson2/db/db.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        localStorage.setItem('goods2', JSON.stringify(data));
      });
  };

  links.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      getData();
    });
  });

  localStorage.setItem('goods', JSON.stringify([1, 2, 3, 4, 5, 6]));
  const goods = JSON.parse(localStorage.getItem('goods'));
  console.log(goods);
  console.log(localStorage);
  localStorage.removeItem('goods');
  console.log(localStorage);
};

getGoods();
