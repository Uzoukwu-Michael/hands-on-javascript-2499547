import Card from "./Card.js";

const cardListItem = (imgData) => {
return `
<li class="cardList_item>
${Card(imgData)}
</li>

`;
}

const CardList = (data) => {
  return `
  <link href="components/cardlist.css" rel="stylesheet">
<section class="cardList">
<ul class="cardList_list">
${data.map((imgData)=> cardListItem(imgData)).join(" ")}
</ul>
</section>
`;
};

export default CardList;
