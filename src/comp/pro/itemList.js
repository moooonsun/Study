import { useEffect, useState } from "react";
import { itemList } from "../api/item";
import ItemArea from './itemArea'
export default function ItemList() {
    const [items, setItems] =useState([]);
    const catagoryLists = [
        { id: '1', 'name': '도서' },
        { id: '2', 'name': '전자' },
        { id: '3', 'name': '생활' },
    ]
    function categoryNum(num) {
        console.log('num: ', num);
    }
    function startItemList() {
        console.log('itemList');
        itemList()
            .then(res => {
                console.log(res);
                if(res.data.code == '200'){
                    setItems(res.data.data);
                }
            })
    }
    useEffect(() => {
        startItemList();
    }, []
    )
    return (
        <div>
            <h1>아이템 리스트</h1>
            {/**카테고리 리스트 */}
            {catagoryLists.map(
                (item, index) => (
                    <div key={index}>
                        <a onClick={e => { e.preventDefault(); categoryNum(item.id) }}>{item.name}</a>
                    </div>
                )
            )}
            {/** 아이템 리스트 */}
            {items.map(
                (item, index) => (
                    <ItemArea item = {item} index ={index}/>
                )
            )}
        </div>
    )
}
