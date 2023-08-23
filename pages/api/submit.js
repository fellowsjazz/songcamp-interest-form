export default async function handler(req, res) {
    const { name, selects, address, twitter, email, music, subscribed } = JSON.parse(req.body);
  
    if (!email || !name) {
      return res.status(400).json({ error: "Missing Fields" });
    }
    if (req.method != "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    try {
      const request = await fetch(
        "https://api.airtable.com/v0/appW6WaxyE3ARN3TJ/Songcamp%20General%20Interest",
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fields: { name, selects, address, twitter, email, music, subscribed } }),
        }
      );
      
      if (request.ok) {
        return res.status(200).json({ data: "ok" });
      } else {
        const responseText = await request.text();
        return res.status(request.status).json({ error: responseText });
      }
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  