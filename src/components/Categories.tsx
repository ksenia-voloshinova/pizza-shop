import React, { memo } from "react";

type CategoriesProps = {
  activeIndex:number;
  onChangeCategory: (index:number) => void;
}
 
const categories = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]
// используем хук memo, чтобы не было перерисовки 
  const Categories:React.FC<CategoriesProps> = memo(({activeIndex, onChangeCategory}) =>{
  return (
    <>
      <div className="categories">
        <ul>
          {
            categories.map((value, index) => (
              <li key={index + value} onClick={() => onChangeCategory(index)} className={activeIndex === index ? 'active' : ''}>{value}</li>
            ))
          }
        </ul>
      </div>
    </>
  );
})
export default Categories;
