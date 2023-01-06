export const GET = async () => {
    const markup = "<xml><h1>Amy Lake Erie Solo Challenge 2022</h1></xml>";
  
    return new Response(markup, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  };