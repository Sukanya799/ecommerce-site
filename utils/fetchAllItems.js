import Category from "@/lib/models/Category";
import dbConnect from "./dbConnect";
import Product from "@/lib/models/Product";
import FeaturedProduct from "@/lib/models/FeaturedProduct";
import Order from "@/lib/models/Order";

await dbConnect();

export const fetchAllProducts = async () => {
  try {
    const products = await Product.find({}).exec();
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchAllCategories = async () => {
  try {
    const categories = await Category.find({}).exec();
    return categories;
  } catch (error) {
    throw new Error(error);
  }
};
export const fetchFeaturedProduct = async () => {
  try {
    const product = await FeaturedProduct.find({}).exec();
    return product[0];
  } catch (error) {
    throw new Error(error);
  }
};
export const fetchOrders = async () => {
  try {
    await dbConnect();
    const orders = await Order.find({}).exec();
      // .populate("products.productId")
      // .populate("users.userId");
    return orders;
  } catch (error) {
    throw new Error(error);
  }
};
