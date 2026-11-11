import { ProductGrid } from './Home.jsx';
const items = [
  { id: 11, name: 'Everyday Linen Shirt', category: 'SHIRTS', price: '₹1,499', image: 'photo-1596755094514-f87e34085b2c', tag: 'BESTSELLER' },
  { id: 12, name: 'Classic Weekend Jacket', category: 'OUTERWEAR', price: '₹2,499', image: 'photo-1523398002811-999ca8dec234', tag: 'POPULAR' },
  { id: 13, name: 'Relaxed Weekend Fit', category: 'CASUAL', price: '₹1,299', image: 'photo-1515886657613-9f3515b0c78f', tag: 'NEW' },
];
export default function Men({ onAddToCart }) { return <CategoryPage eyebrow="THE MEN'S EDIT" title="Easy does it." description="Reliable staples, relaxed fits and layers that do more with less." items={items} onAddToCart={onAddToCart}/>; }
function CategoryPage({ eyebrow, title, description, items, onAddToCart }) { return <section className="category-page"><div className="category-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div><ProductGrid items={items} onAddToCart={onAddToCart}/></section>; }
export { CategoryPage };
