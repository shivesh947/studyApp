import React, {useState, useEffect} from 'react'

import SortableList, { SortableItem } from 'react-easy-sort'
import arrayMove from 'array-move'

const SortingMatch = ({matchData, images,setGameEnd, gameEnd}) => {

  const [items, setItems] = useState()
  const [ansItems, setansItems] = useState()
  const { name1, name2, data } = matchData;

  useEffect(() => {
	listMake()
  }, [])

  useEffect(() => {
	if(checkResult())
	{setGameEnd()}
  }, [items,ansItems])

  const listMake=()=>{
	  const data1=Object.keys(data).sort(() => Math.random() - 0.5);
	  const data2=Object.values(data).sort(() => Math.random() - 0.5);
	  setItems(data1);
	  setansItems(data2);
	//   if(checkResult())
	//   {
	// 	listMake();
	//   }
  }

  const onSortEnd = (oldIndex, newIndex) => {
    setItems((array) => arrayMove(array, oldIndex, newIndex))
  }
  const onSortEndAns = (oldIndex, newIndex) => {
    setansItems((array) => arrayMove(array, oldIndex, newIndex))
  }
  const checkResult=()=>{
	if(items)
	{
		const dataList=items.filter((value,index)=>data[value] === ansItems[index]);
		if(dataList.length === items.length)
		{
			return true;
		}
		return false;
	}
	return false;
  }

  return (
    <div className={`flex gap-16 justify-center break-normal text-center text-xs md:text-sm ${gameEnd && 'hidden'}`}>
		<div>
			<p className="font-medium text-sm md:text-2xl">{name1}</p>
			<SortableList onSortEnd={onSortEnd} draggedItemClassName="dragged">
			{items && items.map((item) => (
				<SortableItem key={item}>
				<div className={` bg-red-200 my-1 shadow-md cursor-pointer flex justify-center relative items-center ${images ? 'h-20 w-28': 'px-2 py-3'}`}><p className="my-auto">{item}</p>
				<span className="translate-x-8 absolute bg-red-200 h-1 right-0 top-1/2 transform w-8"></span>
				</div>
				</SortableItem>
			))}
			</SortableList>
		</div>
		<div >
			<p className="font-medium text-sm md:text-2xl">{name2}</p>
			<SortableList onSortEnd={onSortEndAns} draggedItemClassName="dragged">
			{ansItems && ansItems.map((item) => (
				<SortableItem key={item}>
					<div className={`bg-green-200 my-1 shadow-md cursor-pointer flex justify-center relative items-center ${images ? 'h-20 w-28':'px-2 py-3'}`}>{images ? <img src={item} alt="img" className="my-auto" /> : <p className="my-auto">{item}</p>}
					<span className="-translate-x-8 absolute bg-green-200 h-1 left-0 top-1/2 transform w-8"></span>
					</div>
				</SortableItem>
			))}
			</SortableList>
		</div>
	</div>
  )
}

export default SortingMatch
