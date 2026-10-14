import React from 'react';

// 1. Definisikan tipe data untuk tiap item cart
interface CartItem {
  id: number;
  total: number;
  totalProducts: number;
  totalQuantity: number;
}

interface CartProps {
  testing?: string;
}

const FetchCarts = async ({ testing }: CartProps) => {
  try {
    const res = await fetch("https://dummyjson.com/carts");
    const data = await res.json();
    
    // data.carts adalah array yang akan kita map
    const carts: CartItem[] = data.carts;

    return (
      <div style={{ padding: '20px' }}>
       
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {carts.map((item) => (
            <div  key={item.id} // Memakai id unik sebagai key
              style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}
            >
              <h3>Cart ID: {item.id}</h3>
              <p>Total Produk: {item.totalProducts}</p>
              <p>Total Quantity: {item.totalQuantity}</p>
              <p><strong>Total Harga: ${item.total}</strong></p>
            </div>
          ))}   
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Gagal memuat data.</div>;
  }
};

export default FetchCarts;