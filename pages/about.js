import Link from 'next/link';
import { Card } from 'react-bootstrap';
import ListingDetails from '../components/ListingDetails';
import PageHeader from '../components/PageHeader';

// ✅ Use Server Side Props (safe in local dev)
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/listings/1206363'); // Use localhost during local development
  const data = await res.json();

  return {
    props: {
      listing: data
    }
  };
}

export default function About({ listing }) {
  return (
    <>
      <PageHeader text="About the Developer - Muskaan Mahajan" />

      <Card className="bg-light">
        <Card.Body>
          <p>
            Hi! I'm Muskaan Mahajan, a dedicated software developer focused on building clean and interactive web apps using React, Express, and MongoDB. I'm always learning and love creating impactful solutions.
          </p>
          <p>
            Here's one of the listings available in my app:
          </p>
          <Link href={`/listing/${listing._id}`} passHref legacyBehavior>
            <a>View Listing: {listing.name}</a>
          </Link>
        </Card.Body>

        {/* Listing details rendered here */}
        <ListingDetails listing={listing} />
      </Card>
    </>
  );
}
