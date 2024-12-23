import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";
import { app } from "../firebase/config.js";

const db = getFirestore(app);

// Get all categories (with their products and variants)
export async function getAllCategories() {
  const categoriesSnapshot = await getDocs(collection(db, "categories"));
  const categories = [];

  for (const catDoc of categoriesSnapshot.docs) {
    const catData = catDoc.data();
    const productsColRef = collection(catDoc.ref, "products");
    const productsSnap = await getDocs(productsColRef);

    const products = [];
    for (const prodDoc of productsSnap.docs) {
      const prodData = prodDoc.data();
      const variantsColRef = collection(prodDoc.ref, "variants");
      const variantsSnap = await getDocs(variantsColRef);

      const variants = variantsSnap.docs.map((vDoc) => ({
        id: vDoc.id,
        ...vDoc.data(),
      }));

      products.push({
        id: prodDoc.id,
        ...prodData,
        variants
      });
    }

    categories.push({
      id: catDoc.id,
      ...catData,
      products
    });
  }

  return categories;
}

// Get product by ID (assuming we pass category ID too, or we search among all categories).
// We'll do a simple approach that searches all categories for the product doc matching productId:
export async function getProductById(productId) {
  // Step through each category, then subcollection "products" for match
  const categoriesSnapshot = await getDocs(collection(db, "categories"));

  for (const catDoc of categoriesSnapshot.docs) {
    const productsColRef = collection(catDoc.ref, "products");
    const productsSnap = await getDocs(productsColRef);

    for (const prodDoc of productsSnap.docs) {
      if (prodDoc.id === productId) {
        // Found product
        const prodData = prodDoc.data();
        const variantsColRef = collection(prodDoc.ref, "variants");
        const variantsSnap = await getDocs(variantsColRef);

        const variants = variantsSnap.docs.map((vDoc) => ({
          id: vDoc.id,
          ...vDoc.data(),
        }));

        return {
          categoryId: catDoc.id,
          categoryName: catDoc.data().name,
          id: prodDoc.id,
          ...prodData,
          variants
        };
      }
    }
  }

  return null; // not found
}