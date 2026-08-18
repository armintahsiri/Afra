import React from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'game_account' | 'subscription' | 'gift_card';
  image?: string;
}

const categoryLabels: Record<string, string> = {
  game_account: 'حساب بازی',
  subscription: 'اشتراک',
  gift_card: 'گیفت کارت',
};

export default function ProductCard({ 
  name, 
  description, 
  price, 
  category,
  image 
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      {image && (
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
        {categoryLabels[category] || category}
      </span>
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
      <p className="text-blue-600 font-bold mt-3">
        {price.toLocaleString('fa-IR')} تومان
      </p>
    </div>
  );
}
