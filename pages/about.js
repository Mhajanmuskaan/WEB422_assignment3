import Link from 'next/link';
import { Card } from 'react-bootstrap';
import ListingDetails from '../components/ListingDetails';
import PageHeader from '../components/PageHeader';

// ✅ Production-safe URL (Vercel-hosted)
export async function getStaticProps() {
  const res = await fetch('https://my-oz3gzzy1-muskaan-mahajans-projects.vercel.app/api/listings/1');
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

        <ListingDetails listing={listing} />
      </Card>
    </>
  );
}
