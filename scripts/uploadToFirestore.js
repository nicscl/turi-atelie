/*
  Script to upload local categoriesData (plus any schema modifications) to Firestore.
  Run via: npm run upload:firestore
*/

import admin from 'firebase-admin';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

const serviceAccount = require('./turi-velas-firebase-adminsdk-n5boo-e2e9c5bb7c.json');

// Initialize the Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function uploadCategories() {
  const { default: categoriesData } = await import('../src/data/categoriesData.js');
  
  for (const category of categoriesData) {
    const catRef = db.collection('categories').doc(String(category.id));
    await catRef.set({
      name: category.name,
      image: category.image
    });

    for (const product of category.products) {
      const prodRef = catRef.collection('products').doc(String(product.id));
      await prodRef.set({
        name: product.name
      });

      for (const variant of product.variants) {
        const variantRef = prodRef.collection('variants').doc(variant.id);
        await variantRef.set({
          name: variant.name,
          price: variant.price,
          image: variant.image,
          stock: 20 // default stock value
        });
      }
    }

    console.log(`Uploaded category: ${category.name}`);
  }

  console.log('Upload completed!');
}

uploadCategories()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });