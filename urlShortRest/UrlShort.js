import React, { useState } from "react";
import axios from "axios";
//import CopyToClipboard from "react-copy-to-clipboard";
function UrlShort() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://sw8.in/generate-short-url", {
        longUrl,
      });
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Long URL:
          <input
            type="text"
            value={longUrl}
            onChange={(event) => setLongUrl(event.target.value)}
          />
        </label>
        <br />
        <label>
          Short URL:
          <input type="text" value={shortUrl} readOnly/>
        </label>
        <br />
                <button type="submit">generate</button> 
                
      </form>
    </div>
  );
}

export default UrlShort;
