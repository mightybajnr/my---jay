import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  // Demo state for products
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: null,
    imageUrl: "",
  });
  const [editId, setEditId] = useState(null);

  // Simulate fetch products
  useEffect(() => {
    // Replace with your API call
    setProducts([
      { id: 1, name: "Bead Necklace", price: 25 },
      { id: 2, name: "Gem Bracelet", price: 40 },
    ]);
  }, []);

  // Add product
  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return;
    const newProduct = {
      id: Date.now(),
      name: form.name,
      price: parseFloat(form.price),
      imageUrl: form.imageUrl,
    };
    setProducts([...products, newProduct]);
    setForm({ name: "", price: "", image: null, imageUrl: "" });
  };

  // Edit product
  const handleEdit = (product) => {
    setEditId(product.id);
    setForm({
      name: product.name,
      price: product.price,
      image: null,
      imageUrl: product.imageUrl || "",
    });
  };

  // Update product
  const handleUpdate = (e) => {
    e.preventDefault();
    setProducts(
      products.map((p) =>
        p.id === editId
          ? {
              ...p,
              name: form.name,
              price: parseFloat(form.price),
              imageUrl: form.imageUrl,
            }
          : p
      )
    );
    setEditId(null);
    setForm({ name: "", price: "", image: null, imageUrl: "" });
  };
  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, image: file, imageUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Delete product
  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <form
        onSubmit={editId ? handleUpdate : handleAdd}
        className="mb-6 flex gap-2 flex-wrap"
      >
        <input
          type="text"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border px-2 py-1 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border px-2 py-1 rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border px-2 py-1 rounded"
        />
        {form.imageUrl && (
          <img
            src={form.imageUrl}
            alt="Preview"
            className="h-12 w-12 object-cover rounded border"
          />
        )}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-1 rounded"
        >
          {editId ? "Update" : "Add"}
        </button>
        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setForm({ name: "", price: "", image: null, imageUrl: "" });
            }}
            className="bg-gray-400 text-white px-4 py-1 rounded"
          >
            Cancel
          </button>
        )}
      </form>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="p-2 border">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-12 w-12 object-cover rounded border"
                  />
                ) : (
                  <span className="text-gray-400">No image</span>
                )}
              </td>
              <td className="p-2 border">{product.name}</td>
              <td className="p-2 border">${product.price}</td>
              <td className="p-2 border">
                <button
                  className="bg-yellow-400 px-2 py-1 rounded mr-2"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
