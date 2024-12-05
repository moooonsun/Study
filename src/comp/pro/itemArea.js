
export default function ItemList(props) {
    const item = props.item;
    const index = props.index;
   return(
    <div key={index} style={
        {
            'border': '2px solid blue',
            'width':'400px',
            'margin':'10px',
            'cursor': 'pointer'
        }
    }>
        idx: {item.itemIdx}<br/>
        name: {item.name}<br/>
        가격: {item.price}<br/>
        추천: {item.good}<br/>
        카테고리 이름: {item.categoryName}<br/>
        카테고리idx: {item.categoryId}<br/>
    </div>
   )
}
