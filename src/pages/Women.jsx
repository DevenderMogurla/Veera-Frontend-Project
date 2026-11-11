import { CategoryPage } from './Men.jsx';
const items = [
  { id: 21, name: 'Soft Knit Co-ord', category: 'CO-ORDS', price: '₹1,899', image: 'photo-1483985988355-763728e1935b', tag: 'NEW' },
  { id: 22, name: 'Everyday Minimal', category: 'ESSENTIALS', price: '₹1,299', image: 'photo-1485230895905-ec40ba36b9bc', tag: 'BESTSELLER' },
  { id: 23, name: 'Weekend Layers', category: 'LAYERING', price: '₹2,099', image: 'photo-1529139574466-a303027c1d8b', tag: 'JUST IN' },
];
export default function Women({ onAddToCart }) { return <CategoryPage eyebrow="THE WOMEN'S EDIT" title="Feel-good dressing." description="Versatile pieces, soft textures and confident everyday silhouettes." items={items} onAddToCart={onAddToCart}/>; }
