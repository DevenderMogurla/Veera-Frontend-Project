import { CategoryPage } from './Men.jsx';
const items = [
  { id: 31, name: 'Mini Explorer Set', category: 'SETS', price: '₹999', image: 'photo-1519238263530-99b5f7e5b2f7', tag: 'JUST IN' },
  { id: 32, name: 'Little Day-Out Tee', category: 'TOPS', price: '₹499', image: 'photo-1503919005314-30d93d07d823', tag: 'EASY PICK' },
  { id: 33, name: 'Play-All-Day Layers', category: 'LAYERING', price: '₹1,199', image: 'photo-1516627145497-ae6968895b74', tag: 'POPULAR' },
];
export default function Kids({ onAddToCart }) { return <CategoryPage eyebrow="THE LITTLE ONES' EDIT" title="Made for big little days." description="Comfy, playful essentials ready for every adventure." items={items} onAddToCart={onAddToCart}/>; }
