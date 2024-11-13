import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams to get slug from URL

const HubSpot = () => { // Rename component to HubSpot
  const { slug } = useParams(); // Get the slug from the URL using useParams
  const [pageContent, setPageContent] = useState(null); // State to hold fetched data
  const [error, setError] = useState(null); // State to handle errors
  const [loading, setLoading] = useState(true); // Loading state to indicate data fetch status

  useEffect(() => {
    // Function to fetch page content from HubSpot
    const fetchHubSpotPage = async () => {
      const apiUrl = `/content/api/v2/pages?slug=${slug}`; // Use dynamic slug

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_HUBSPOT_SANDBOX_TOKEN}`, // Get token from .env
          },
        });

        console.log('Fetched Data:', response.data.objects[0]);
        const page = response.data.objects[0]; // Get the first page object
        setPageContent(page); // Set data in state
      } catch (error) {
        console.error('Error fetching page content from HubSpot:', error);
        setError('Failed to fetch content'); // Set error in state
      } finally {
        setLoading(false); // Set loading to false after fetching is complete
      }
    };

    if (slug) {
      fetchHubSpotPage(); // Call fetch function only if slug is available
    }

  }, [slug]); // Dependency array includes slug to re-run the effect when slug changes

  // Conditional rendering based on data and error
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : pageContent ? (
        <div className="iframe-container">
          {/* Using iframe to render the published URL */}
          <iframe
            src={pageContent.published_url}
            title="HubSpot Page"
            width="100%"
            height="800px"
            frameBorder="0"
            style={{ border: 'none' }}
            loading="lazy"
          />
        </div>
      ) : (
        <p>No content found.</p>
      )}
    </div>
  );
};

export default HubSpot; // Export renamed component
