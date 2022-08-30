import categories from '../../categories.json'
import CategoryItem from '../category-item/category-item.component'
import './directory.styles.css'

export default function Directory (){
    return(
        <div className="directory-container">
            {categories.map(category => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}