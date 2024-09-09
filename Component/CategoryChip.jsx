


function CategoryChip({category , isChosen , onClick}){
    // console.log("onClick=>" , onClick)
    const {name} = category;
    return(
      
        <div 
        onClick={onClick}
        className=
        {`${
            isChosen ? " bg-green-400 text-white" : "bg-white text-black" 
        } p-2 
            cursor-pointer 
            border px-4 rounded-md m-1 `}>




            <h1>{name}</h1>
        </div>
    );
}

export default CategoryChip;