// pages/api/listing.js
import clientPromise from "../../lib/mongodb"; // use relative path!

export default async function handler(req, res) {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;

  try {
    const client = await clientPromise;
    const db = client.db("sample_airbnb");
    const listings = db.collection("listingsAndReviews");

    const results = await listings
      .find({})
      .skip((page - 1) * perPage)
      .limit(perPage)
      .toArray();

    res.status(200).json(results);
  } catch (e) {
    console.error("MONGODB ERROR:", e); // 👈 Better error log
    res.status(500).json({ message: "Unable to fetch listings" });
  }
}
